import { from } from 'rxjs';
import {
  mergeMap, map
} from 'rxjs/operators';

const getFetchOption = (method, headers, data) => {
  const defaultOption = {
    method,
    headers: new Headers(headers),
  };
  if (method.toLowerCase() === 'get') {
    return defaultOption;
  }
  // POST json object
  return {
    method,
    headers: new Headers(headers),
    body: JSON.stringify(data),
  };
};

const request = (action) => {
  const {
    method,
    url,
    data,
  } = action;
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  const fetchOption = getFetchOption(method, headers, data);
  return from(
    fetch(url, fetchOption).then((response) => {
      return response;
    })).pipe(
      mergeMap((res) => from(new Promise((resolve, reject) => {
        res.json().then((fulfilled) => {
          resolve({
            status: res.status,
            res: fulfilled,
          });
        }, (err) => reject(err));
      }))),
      map((value: any) => {
        return value.res
      })
    )
}

export { request }
