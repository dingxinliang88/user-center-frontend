# 用户中心前端

## 如何上线？

1. 打包项目
   
   ```sh
   npm run build
   ```
   
1. 将dist目录上传服务器
   
1. 上传Dockerfile和`docker`文件夹一起上传至和dist同级的目录
   
1. 构建镜像
   
   ```sh
   docker build -t user-center-frontend:0.0.1 .
   ```

5. 启动镜像
	```sh
	docker run -p 80:80 -d user-center-frontend:0.0.1
	```

6. 访问ip即可



