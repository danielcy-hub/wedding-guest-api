export interface Default {
  id ?: number;
  name : string;
  address : string;
  guest_of : string;
  person_qty : number;
}

export interface GetParams {
  sortCol : string;
  sortOrder : 'ASC' | 'DESC';
  limit : number;
  offset : number;
  search ?: string;
}