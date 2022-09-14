export const Info = (namespace: number, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [INFO] ${message} [${namespace}]`, object);
  } else {
    console.log(`[${getTimeStamp()}] [INFO] ${message} [${namespace}]`);
  }
};

export const Warn = (namespace: number, message: string, object?: any) => {
  if (object) {
    console.log(`[${getTimeStamp()}] [WARN] ${message} [${namespace}]`, object);
  } else {
    console.log(`[${getTimeStamp()}] [WARN] ${message} [${namespace}]`);
  }
};

export const Error = (namespace: number, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [ERROR] ${message} [${namespace}]`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [ERROR] ${message} [${namespace}]`);
  }
};

export const Debug = (namespace: number, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [DEBUG] ${message} [${namespace}]`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] ${message} [${namespace}]`);
  }
};

const getTimeStamp = (): string => {
  return new Date().toISOString();
};
