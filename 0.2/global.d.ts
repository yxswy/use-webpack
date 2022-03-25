interface JQueryInstance {
  html: (html: string) => JQueryInstance;
}

// 重复声明实现函数重载
declare function $(param: () => void): void;
declare function $(param: string): JQueryInstance;
