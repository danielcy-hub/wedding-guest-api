import { GetParams, Default } from '../interfaces/guess';
import { getRepository } from 'typeorm';
import { Guest } from '../entities/guest';

const err = {
  status: 500,
  message: 'INTERNAL-SERVER-ERROR'
}
class GuessService {
  public get = function (param: GetParams): Promise<Guest[]> {
    return new Promise<Guest[]>((resolve, reject) => {
      const query = getRepository(Guest).createQueryBuilder('guest');
      if (param.search) query.where('LOWER(guest.name) LIKE :search', { search: '%' + param.search + '%' });
      query
        .orderBy('guest.' + param.sortCol, param.sortOrder)
        .limit(param.limit)
        .offset(param.offset)
        .getMany()
        .then((data: Guest[]) => {
          resolve(data);
        })
        .catch(() => {
          reject(err)
        });
    });
  };
  public create = function (param: Default): Promise<boolean> {
    return new Promise<boolean> ((resolve,reject)=>{
      const guessData = getRepository(Guest).create(param);
      getRepository(Guest).save(guessData)
      .then(()=>{
        resolve(true);
      })
      .catch(()=>{
        reject(err);
      })
    })
  };
  public update = function (param: Default): Promise<boolean> {
    return new Promise<boolean> ((resolve,reject)=>{
      getRepository(Guest).findOne(param.id)
      .then((data)=>{
        if(!data) resolve(false);
        else {
          const dataMerge = getRepository(Guest).merge(data,param);
          return getRepository(Guest).save(dataMerge);
        }
      })
      .then(()=>{
        resolve(true);
      })
      .catch(()=>{
        reject(err);
      })
    })
  };
}

export default GuessService;
