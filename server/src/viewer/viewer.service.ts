import { Injectable } from '@nestjs/common';
import { CreateViewerDto } from './dto/create-viewer.dto';
import { UpdateViewerDto } from './dto/update-viewer.dto';
import { HttpModule, HttpService } from '@nestjs/axios'
import { parse, stringify } from 'flatted'
import { firstValueFrom, map } from 'rxjs';
import { Agent } from 'https';

@Injectable()
export class ViewerService {

  create(createViewerDto: CreateViewerDto) {
    return 'This action adds a new viewer';
  }

  constructor(private readonly httpService: HttpService) { }
  findAll(): any {
    const httpsAgent = new Agent({ rejectUnauthorized: false });
    // 数据要转换格式，否则报错
    let res = firstValueFrom(this.httpService.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf', { httpsAgent }).pipe(
      map((res) => res.data)))
    return res
  }

  findOne(id: number) {
    return `This action returns a #${id} viewer`;
  }

  update(id: number, updateViewerDto: UpdateViewerDto) {
    return `This action updates a #${id} viewer`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewer`;
  }
}
