export const buildUrlQueryParams = (params: { [key: string]: string | number | string[] }): string => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if(typeof value !== 'object' && value ) queryParams.append(key, value.toString());
      if(typeof value == 'object' && value.length > 0 ) queryParams.append(key, value.toString());
    });
    return queryParams.toString();
  };