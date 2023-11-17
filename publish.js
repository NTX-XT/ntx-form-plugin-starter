import {BlobServiceClient} from '@azure/storage-blob';
import dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME);
await containerClient.createIfNotExists({
        access: 'container'
    })


const headers = {
  blobContentType: 'application/javascript',
};

for (const file of fs.readdirSync('./build/release', {withFileTypes: true})) {
    const publishedPath = (process.env.AZURE_STORAGE_FOLDER_NAME ? `${process.env.AZURE_STORAGE_FOLDER_NAME}/${file.name}` : file.name)
    const blockBlobClient = containerClient.getBlockBlobClient(publishedPath);
    const data = fs.readFileSync(`./build/release/${file.name}`, {encoding: 'UTF8'})
    await blockBlobClient.upload(data, data.length, {
      blobHTTPHeaders: headers
    })

    console.log(`${file.name} published @ ${blockBlobClient.url}`);
}
