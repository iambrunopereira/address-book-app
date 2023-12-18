export const buildUrlQueryParams = (params: { [key: string]: string | number }): string => {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if(value) queryParams.append(key, value.toString());
    });
    return queryParams.toString();
  };