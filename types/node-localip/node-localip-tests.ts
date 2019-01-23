import getLocalIp from 'node-localip';
() => {
	getLocalIp((err, ip) => {
		const testErr: any = err;
		const testIp: string = ip;
	});
	getLocalIp((err, ip) => {
		const testErr: any = err;
		const testIp: string = ip;
	}, false);
	getLocalIp((err, ips) => {
		const testErr: any = err;
		const testIp: string[] = ips;
	}, true);
}
