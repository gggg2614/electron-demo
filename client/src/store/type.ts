export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	continueDayZeroLocalConfirm: number;
	dead: number;
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	confirm: number;
	heal: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	showRate: boolean;
	adcode: string;
	nowConfirm: number;
}

export interface Today {
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	confirm: number;
	dead: number;
	showRate: boolean;
	provinceLocalConfirm: number;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	adcode: string;
	nowConfirm: number;
	showHeal: boolean;
	wzz: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	heal: number;
}

export interface Today {
	confirmCuts: number;
	isUpdated: boolean;
	// wzz_add: string;
	local_confirm_add: number;
	confirm: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	adcode: string;
	nowConfirm: number;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	confirm: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	provinceLocalConfirm: number;
	dead: number;
	showRate: boolean;
	wzz: number;
}

export interface Children {
	date: string;
	today: Today;
	total: Total;
	name: string;
	adcode: string;
}

export interface Children {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	localConfirm: number;
	mRiskTime: string;
	nowSevere: number;
	mediumRiskAreaNum: number;
	noInfect: number;
	noInfectH5: number;
	confirmAdd: number;
	mtime: string;
	confirm: number;
	importedCase: number;
	showlocalinfeciton: number;
	localConfirmH5: number;
	local_acc_confirm: number;
	localConfirmAdd: number;
	highRiskAreaNum: number;
	heal: number;
	suspect: number;
	localWzzAdd: number;
	nowLocalWzz: number;
	deadAdd: number;
	nowConfirm: number;
	dead: number;
	showLocalConfirm: number;
}

export interface ChinaAdd {
	confirm: number;
	heal: number;
	nowConfirm: number;
	importedCase: number;
	noInfectH5: number;
	localConfirmH5: number;
	dead: number;
	suspect: number;
	nowSevere: number;
	noInfect: number;
	localConfirm: number;
}

export interface ShowAddSwitch {
	dead: boolean;
	heal: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	all: boolean;
	confirm: boolean;
	suspect: boolean;
	nowConfirm: boolean;
	localinfeciton: boolean;
}

export interface Diseaseh5Shelf {
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
}

export interface LocalCityNCOVDataList {
	mtime: string;
	local_wzz_add: string;
	highRiskAreaNum: number;
	isSpecialCity: boolean;
	adcode: string;
	isUpdated: boolean;
	date: string;
	local_confirm_add: number;
	mediumRiskAreaNum: number;
	province: string;
	city: string;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}