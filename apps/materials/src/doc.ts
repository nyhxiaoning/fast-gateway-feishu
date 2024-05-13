/*
 * @Author: Cookie
 * @Description: 创建文档
 */

import * as packageConfig from '../package.json'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const generateDocument = (app) => {

  const options = new DocumentBuilder()
    .setTitle('物料系统')
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  console.log('http://127.0.0.1:4000/doc', 'doc打印当前的swagger')
  SwaggerModule.setup('/doc', app, document);
}
