
declare namespace assertRejected { }

declare function assertRejected(promise: Promise<any>, message?: string): Promise<Error>;

export = assertRejected;
