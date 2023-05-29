// import Minio from 'minio';

// const minioClient = new Minio.Client({
//   endPoint: 'localhost',
//   port: 9001,
//   useSSL: false,
//   accessKey: 'y8JoEx8sC6o2remm4ngK',
//   secretKey: 'gxNQKoU5oLgVcMaKuJt5IsxilJEBv4HS6dPAXKXA',
// });

// export default minioClient;




import { APIRoute } from "next-s3-upload";

export default APIRoute.configure({
  accessKeyId: "y8JoEx8sC6o2remm4ngK",
  secretAccessKey: "gxNQKoU5oLgVcMaKuJt5IsxilJEBv4HS6dPAXKXA",
  bucket: "asia1rio",
  region: "indonesia",
  endpoint: "http://localhost:9001/"
});