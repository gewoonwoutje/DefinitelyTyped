// Type definitions for node-localip v0.1.3
// Project: http://registry.npmjs.org/node-localip/-/node-localip-0.1.3.tgz
// Definitions by: Wout Elstgeest
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'node-localip' {
	type IpCallback = (err: undefined, ip: string) => void | ((err: any, ip: undefined) => void);
	type IpsCallback = (err: undefined, ip: string[]) => void | ((err: any, ip: undefined) => void);
	function getLocalIp(callback: IpCallback): void;
	function getLocalIp(callback: IpCallback, list: false): void;
	function getLocalIp(callback: IpsCallback, list: true): void;
	export default getLocalIp;
}
