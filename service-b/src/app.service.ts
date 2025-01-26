import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class DataService {
  constructor() {}
  getData(): Observable<ExternalData[]> {
    return of([
      {
        id: 1212,
        title: 'Data1',
        description: 'Data1',
      },
    ]);
  }

  getDataUp(): Observable<ExternalData[]> {
    return of([
      { id: 1212, title: 'Data2', description: 'Data2 ' },
      { id: 14212, title: 'Coucou', description: 'Coucou' },
      { id: 142, title: 'zoueoue', description: 'Zoudfu' },
    ]);
  }
}

export interface ExternalData {
  id: number;
  title: string;
  description: string;
}
