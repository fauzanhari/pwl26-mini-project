export function httpError(message:string,status=400){const e:any=new Error(message);e.status=status;return e;}
