export const Info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

export const Warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

export const Error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

export const Debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.log(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
      object
    );
  } else {
    console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

const getTimeStamp = (): string => {
  return new Date().toISOString();
};
