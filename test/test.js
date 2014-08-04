describe('Example #1', function () {
	it('should return "fgh"', function () {
		expect(new Parser('daccadfghd_i').parse()).toEqual('fgh');
	});
});

describe('Example #2', function () {
	it('should return "fgebac"', function () {
		expect(new Parser('abacbcbefge').parse()).toEqual('fgebac');
	});
});

describe('Example #3', function () {
	it('should return "bda"', function () {
		expect(new Parser('_a_abda_').parse()).toEqual('bda');
	});
});

describe('Example #4', function () {
	it('should return "rainbow"', function () {
		expect(new Parser('ttvmswxjzdgzqxotby_lslonwqaipchgqdo_yz_fqdagixyrobdjtnl_jqzpptzfcdcjjcpjjnnvopmh').parse()).toEqual('rainbow');
	});
});