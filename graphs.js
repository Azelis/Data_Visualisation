// 1st graph
window.onresize = function(){
  draw1Chart();
  draw3Chart();
  draw4Chart();
};

window.onload = function(){
  draw1Chart();
  draw3Chart();
  draw4Chart();
};
function draw1Chart() {
      var data = []
      data[0] = google.visualization.arrayToDataTable([
        ['Time',	'UK',	{type:'string', role:'annotation'},	'Iceland',	{type:'string', role:'annotation'},	'Denmark',	{ "type": "string", "role": "style" },	'Finland',	{ "type": "string", "role": "style" },	'Sweden',	{ "type": "string", "role": "style" },	'Norway',	{ "type": "string", "role": "style" },	'Austria',	{ "type": "string", "role": "style" },	'Belgium',	{ "type": "string", "role": "style" },	'France',	{ "type": "string", "role": "style" },	'Germany',	{ "type": "string", "role": "style" },	'Ireland',	{ "type": "string", "role": "style" },	'Luxembourg',	{ "type": "string", "role": "style" },	'Netherlands',	{ "type": "string", "role": "style" },	'Switzerland',	{ "type": "string", "role": "style" },	'Greece',	{ "type": "string", "role": "style" },	'Italy',	{ "type": "string", "role": "style" },	'Cyprus',	{ "type": "string", "role": "style" },	'Malta',	{ "type": "string", "role": "style" },	'Portugal',	{ "type": "string", "role": "style" },	'Spain',	{ "type": "string", "role": "style" },	'Poland',	{ "type": "string", "role": "style" },	'Bulgaria',	{ "type": "string", "role": "style" },	'Czechia',	{ "type": "string", "role": "style" },	'Estonia',	{ "type": "string", "role": "style" },	'Croatia',	{ "type": "string", "role": "style" },	'Latvia',	{ "type": "string", "role": "style" },	'Lithuania',	{ "type": "string", "role": "style" },	'Hungary',	{ "type": "string", "role": "style" },	'Romania',	{ "type": "string", "role": "style" },	'Slovenia',	{ "type": "string", "role": "style" },	'Slovakia',	{ "type": "string", "role": "style" }],
        ['2009',	36688,	null,	21902,	null,	32588,	'opacity: 0.6;',	31062,	'opacity: 0.6;',	29668,	'opacity: 0.6;',	40368,	'opacity: 0.6;',	30329,	'opacity: 0.6;',	26773,	'opacity: 0.6;',	29440,	'opacity: 0.6;',	28688,	'opacity: 0.6;',	30904,	'opacity: 0.6;',	42329,	'opacity: 0.6;',	31758,	'opacity: 0.6;',	39201,	'opacity: 0.6;',	25186,	'opacity: 0.6;',	30521,	'opacity: 0.6;',	21017,	'opacity: 0.6;',	17406,	'opacity: 0.6;',	19653,	'opacity: 0.6;',	24976,	'opacity: 0.6;',	14046,	'opacity: 0.6;',	9246,	'opacity: 0.6;',	16306,	'opacity: 0.6;',	12106,	'opacity: 0.6;',	17605,	'opacity: 0.6;',	12110,	'opacity: 0.6;',	12402,	'opacity: 0.6;',	13978,	'opacity: 0.6;',	12102,	'opacity: 0.6;',	18551,	'opacity: 0.6;',	15894,	'opacity: 0.6;'],
        ['2010',	39927,	null,	24111,	null,	34361,	'opacity: 0.6;',	31947,	'opacity: 0.6;',	33400,	'opacity: 0.6;',	45943,	'opacity: 0.6;',	31012,	'opacity: 0.6;',	27260,	'opacity: 0.6;',	30023,	'opacity: 0.6;',	29607,	'opacity: 0.6;',	28769,	'opacity: 0.6;',	43006,	'opacity: 0.6;',	30876,	'opacity: 0.6;',	44366,	'opacity: 0.6;',	24281,	'opacity: 0.6;',	30820,	'opacity: 0.6;',	20103,	'opacity: 0.6;',	17664,	'opacity: 0.6;',	19894,	'opacity: 0.6;',	24451,	'opacity: 0.6;',	14649,	'opacity: 0.6;',	9182,	'opacity: 0.6;',	16745,	'opacity: 0.6;',	11842,	'opacity: 0.6;',	16153,	'opacity: 0.6;',	12293,	'opacity: 0.6;',	11721,	'opacity: 0.6;',	12378,	'opacity: 0.6;',	11613,	'opacity: 0.6;',	18243,	'opacity: 0.6;',	16015,	'opacity: 0.6;'],
        ['2011',	40775,	null,	25395,	null,	33987,	'opacity: 0.6;',	32817,	'opacity: 0.6;',	36838,	'opacity: 0.6;',	50578,	'opacity: 0.6;',	31125,	'opacity: 0.6;',	27838,	'opacity: 0.6;',	31574,	'opacity: 0.6;',	30319,	'opacity: 0.6;',	29024,	'opacity: 0.6;',	43632,	'opacity: 0.6;',	31558,	'opacity: 0.6;',	49556,	'opacity: 0.6;',	22378,	'opacity: 0.6;',	29903,	'opacity: 0.6;',	21724,	'opacity: 0.6;',	18445,	'opacity: 0.6;',	19230,	'opacity: 0.6;',	24203,	'opacity: 0.6;',	15487,	'opacity: 0.6;',	8843,	'opacity: 0.6;',	17985,	'opacity: 0.6;',	13087,	'opacity: 0.6;',	15975,	'opacity: 0.6;',	13253,	'opacity: 0.6;',	13317,	'opacity: 0.6;',	14342,	'opacity: 0.6;',	11258,	'opacity: 0.6;',	18423,	'opacity: 0.6;',	15949,	'opacity: 0.6;'],
        ['2012',	44859,	null,	27709,	null,	36223,	'opacity: 0.6;',	33927,	'opacity: 0.6;',	39646,	'opacity: 0.6;',	53596,	'opacity: 0.6;',	32046,	'opacity: 0.6;',	28329,	'opacity: 0.6;',	31007,	'opacity: 0.6;',	32237,	'opacity: 0.6;',	28843,	'opacity: 0.6;',	45664,	'opacity: 0.6;',	33023,	'opacity: 0.6;',	52657,	'opacity: 0.6;',	20508,	'opacity: 0.6;',	28851,	'opacity: 0.6;',	21540,	'opacity: 0.6;',	18623,	'opacity: 0.6;',	18483,	'opacity: 0.6;',	23227,	'opacity: 0.6;',	14723,	'opacity: 0.6;',	8823,	'opacity: 0.6;',	17165,	'opacity: 0.6;',	14870,	'opacity: 0.6;',	15645,	'opacity: 0.6;',	15335,	'opacity: 0.6;',	13955,	'opacity: 0.6;',	12901,	'opacity: 0.6;',	11392,	'opacity: 0.6;',	18380,	'opacity: 0.6;',	16466,	'opacity: 0.6;'],
        ['2013',	43440,	null,	30161,	null,	36270,	'opacity: 0.6;',	34086,	'opacity: 0.6;',	42594,	'opacity: 0.6;',	53699,	'opacity: 0.6;',	32657,	'opacity: 0.6;',	28938,	'opacity: 0.6;',	32267,	'opacity: 0.6;',	33152,	'opacity: 0.6;',	29696,	'opacity: 0.6;',	45941,	'opacity: 0.6;',	33208,	'opacity: 0.6;',	50478,	'opacity: 0.6;',	19386,	'opacity: 0.6;',	28155,	'opacity: 0.6;',	20625,	'opacity: 0.6;',	19132,	'opacity: 0.6;',	18603,	'opacity: 0.6;',	22608,	'opacity: 0.6;',	14553,	'opacity: 0.6;',	8724,	'opacity: 0.6;',	16650,	'opacity: 0.6;',	14856,	'opacity: 0.6;',	15342,	'opacity: 0.6;',	15915,	'opacity: 0.6;',	14787,	'opacity: 0.6;',	12708,	'opacity: 0.6;',	11318,	'opacity: 0.6;',	17958,	'opacity: 0.6;',	16191,	'opacity: 0.6;'],
        ['2014',	44870,	null,	32744,	null,	36567,	'opacity: 0.6;',	34250,	'opacity: 0.6;',	41572,	'opacity: 0.6;',	50883,	'opacity: 0.6;',	32821,	'opacity: 0.6;',	29058,	'opacity: 0.6;',	31774,	'opacity: 0.6;',	33652,	'opacity: 0.6;',	32119,	'opacity: 0.6;',	49067,	'opacity: 0.6;',	33139,	'opacity: 0.6;',	50130,	'opacity: 0.6;',	20252,	'opacity: 0.6;',	28996,	'opacity: 0.6;',	20020,	'opacity: 0.6;',	19850,	'opacity: 0.6;',	19518,	'opacity: 0.6;',	22509,	'opacity: 0.6;',	14203,	'opacity: 0.6;',	9314,	'opacity: 0.6;',	15899,	'opacity: 0.6;',	15989,	'opacity: 0.6;',	15429,	'opacity: 0.6;',	16487,	'opacity: 0.6;',	15367,	'opacity: 0.6;',	12765,	'opacity: 0.6;',	11380,	'opacity: 0.6;',	17423,	'opacity: 0.6;',	16411,	'opacity: 0.6;'],
        ['2015',	52162,	null,	37231,	null,	38854,	'opacity: 0.6;',	34383,	'opacity: 0.6;',	42460,	'opacity: 0.6;',	49860,	'opacity: 0.6;',	32603,	'opacity: 0.6;',	29116,	'opacity: 0.6;',	32172,	'opacity: 0.6;',	34095,	'opacity: 0.6;',	33121,	'opacity: 0.6;',	48580,	'opacity: 0.6;',	33164,	'opacity: 0.6;',	58099,	'opacity: 0.6;',	19783,	'opacity: 0.6;',	28347,	'opacity: 0.6;',	20536,	'opacity: 0.6;',	21905,	'opacity: 0.6;',	20694,	'opacity: 0.6;',	23001,	'opacity: 0.6;',	14939,	'opacity: 0.6;',	9599,	'opacity: 0.6;',	16556,	'opacity: 0.6;',	16625,	'opacity: 0.6;',	15088,	'opacity: 0.6;',	16003,	'opacity: 0.6;',	16129,	'opacity: 0.6;',	13836,	'opacity: 0.6;',	11847,	'opacity: 0.6;',	18313,	'opacity: 0.6;',	16739,	'opacity: 0.6;'],
        ['2016',	46787,	null,	44631,	null,	39375,	'opacity: 0.6;',	34655,	'opacity: 0.6;',	43677,	'opacity: 0.6;',	48585,	'opacity: 0.6;',	33275,	'opacity: 0.6;',	29866,	'opacity: 0.6;',	32391,	'opacity: 0.6;',	34616,	'opacity: 0.6;',	36076,	'opacity: 0.6;',	50087,	'opacity: 0.6;',	33242,	'opacity: 0.6;',	55706,	'opacity: 0.6;',	20055,	'opacity: 0.6;',	28644,	'opacity: 0.6;',	21861,	'opacity: 0.6;',	22912,	'opacity: 0.6;',	22517,	'opacity: 0.6;',	24527,	'opacity: 0.6;',	14450,	'opacity: 0.6;',	10751,	'opacity: 0.6;',	17394,	'opacity: 0.6;',	16874,	'opacity: 0.6;',	16426,	'opacity: 0.6;',	15857,	'opacity: 0.6;',	17410,	'opacity: 0.6;',	14753,	'opacity: 0.6;',	12207,	'opacity: 0.6;',	18705,	'opacity: 0.6;',	16756,	'opacity: 0.6;'],
        ['2017',	44628,	null,	51659,	null,	41721,	'opacity: 0.6;',	36093,	'opacity: 0.6;',	42559,	'opacity: 0.6;',	50528,	'opacity: 0.6;',	34711,	'opacity: 0.6;',	29713,	'opacity: 0.6;',	33425,	'opacity: 0.6;',	36430,	'opacity: 0.6;',	38213,	'opacity: 0.6;',	50036,	'opacity: 0.6;',	33937,	'opacity: 0.6;',	55403,	'opacity: 0.6;',	20770,	'opacity: 0.6;',	28846,	'opacity: 0.6;',	22993,	'opacity: 0.6;',	24534,	'opacity: 0.6;',	24628,	'opacity: 0.6;',	26230,	'opacity: 0.6;',	15502,	'opacity: 0.6;',	10759,	'opacity: 0.6;',	19523,	'opacity: 0.6;',	17656,	'opacity: 0.6;',	17715,	'opacity: 0.6;',	16289,	'opacity: 0.6;',	17804,	'opacity: 0.6;',	16110,	'opacity: 0.6;',	13351,	'opacity: 0.6;',	19403,	'opacity: 0.6;',	17025,	'opacity: 0.6;'],
        ['2018',	43044,	'UK',	52892,	'Iceland',	42802,	'opacity: 0.6;',	36646,	'opacity: 0.6;',	41174,	'opacity: 0.6;',	50120,	'opacity: 0.6;',	35196,	'opacity: 0.6;',	30491,	'opacity: 0.6;',	34395,	'opacity: 0.6;',	38098,	'opacity: 0.6;',	40082,	'opacity: 0.6;',	52550,	'opacity: 0.6;',	34921,	'opacity: 0.6;',	53411,	'opacity: 0.6;',	21428,	'opacity: 0.6;',	28903,	'opacity: 0.6;',	25247,	'opacity: 0.6;',	26018,	'opacity: 0.6;',	27032,	'opacity: 0.6;',	27537,	'opacity: 0.6;',	15408,	'opacity: 0.6;',	10914,	'opacity: 0.6;',	21525,	'opacity: 0.6;',	18882,	'opacity: 0.6;',	18118,	'opacity: 0.6;',	17102,	'opacity: 0.6;',	18821,	'opacity: 0.6;',	15944,	'opacity: 0.6;',	13929,	'opacity: 0.6;',	20606,	'opacity: 0.6;',	17661,	'opacity: 0.6;'],
                              ]);
//North
      data[1] = google.visualization.arrayToDataTable([
        ['Time',	'Iceland',	{type:'string', role:'annotation'},	'Sweden',	{ "type": "string", "role": "style" },	'Denmark',	{ "type": "string", "role": "style" },	'Finland',	{ "type": "string", "role": "style" },	'Norway',	{ "type": "string", "role": "style" }],
        ['2009',	21902,	null,	29668,	'opacity: 1;',	32588,	'opacity: 1;',	31062,	'opacity: 1;',	40368,	'opacity: 1;'],
        ['2010',	24111,	null,	33400,	'opacity: 1;',	34361,	'opacity: 1;',	31947,	'opacity: 1;',	45943,	'opacity: 1;'],
        ['2011',	25395,	null,	36838,	'opacity: 1;',	33987,	'opacity: 1;',	32817,	'opacity: 1;',	50578,	'opacity: 1;'],
        ['2012',	27709,	null,	39646,	'opacity: 1;',	36223,	'opacity: 1;',	33927,	'opacity: 1;',	53596,	'opacity: 1;'],
        ['2013',	30161,	null,	42594,	'opacity: 1;',	36270,	'opacity: 1;',	34086,	'opacity: 1;',	53699,	'opacity: 1;'],
        ['2014',	32744,	null,	41572,	'opacity: 1;',	36567,	'opacity: 1;',	34250,	'opacity: 1;',	50883,	'opacity: 1;'],
        ['2015',	37231,	null,	42460,	'opacity: 1;',	38854,	'opacity: 1;',	34383,	'opacity: 1;',	49860,	'opacity: 1;'],
        ['2016',	44631,	null,	43677,	'opacity: 1;',	39375,	'opacity: 1;',	34655,	'opacity: 1;',	48585,	'opacity: 1;'],
        ['2017',	51659,	null,	42559,	'opacity: 1;',	41721,	'opacity: 1;',	36093,	'opacity: 1;',	50528,	'opacity: 1;'],
        ['2018',	52892,	'Iceland',	41174,	'opacity: 1;',	42802,	'opacity: 1;',	36646,	'opacity: 1;',	50120,	'opacity: 1;'],
            ]);
//West
data[2] = google.visualization.arrayToDataTable([
  ['Time',	'UK',	{type:'string', role:'annotation'},	'Austria',	{ "type": "string", "role": "style" },	'Belgium',	{ "type": "string", "role": "style" },	'Ireland',	{ "type": "string", "role": "style" },	'France',	{ "type": "string", "role": "style" },	'Germany',	{ "type": "string", "role": "style" },	'Luxembourg',	{ "type": "string", "role": "style" },	'Netherlands',	{ "type": "string", "role": "style" },	'Switzerland',	{ "type": "string", "role": "style" }],
  ['2009',	36688,	null,	30329,	'opacity: 1;',	26773,	'opacity: 1;',	30904,	'opacity: 1;',	29440,	'opacity: 1;',	28688,	'opacity: 1;',	42329,	'opacity: 1;',	31758,	'opacity: 1;',	39201,	'opacity: 1;'],
  ['2010',	39927,	null,	31012,	'opacity: 1;',	27260,	'opacity: 1;',	28769,	'opacity: 1;',	30023,	'opacity: 1;',	29607,	'opacity: 1;',	43006,	'opacity: 1;',	30876,	'opacity: 1;',	44366,	'opacity: 1;'],
  ['2011',	40775,	null,	31125,	'opacity: 1;',	27838,	'opacity: 1;',	29024,	'opacity: 1;',	31574,	'opacity: 1;',	30319,	'opacity: 1;',	43632,	'opacity: 1;',	31558,	'opacity: 1;',	49556,	'opacity: 1;'],
  ['2012',	44859,	null,	32046,	'opacity: 1;',	28329,	'opacity: 1;',	28843,	'opacity: 1;',	31007,	'opacity: 1;',	32237,	'opacity: 1;',	45664,	'opacity: 1;',	33023,	'opacity: 1;',	52657,	'opacity: 1;'],
  ['2013',	43440,	null,	32657,	'opacity: 1;',	28938,	'opacity: 1;',	29696,	'opacity: 1;',	32267,	'opacity: 1;',	33152,	'opacity: 1;',	45941,	'opacity: 1;',	33208,	'opacity: 1;',	50478,	'opacity: 1;'],
  ['2014',	44870,	null,	32821,	'opacity: 1;',	29058,	'opacity: 1;',	32119,	'opacity: 1;',	31774,	'opacity: 1;',	33652,	'opacity: 1;',	49067,	'opacity: 1;',	33139,	'opacity: 1;',	50130,	'opacity: 1;'],
  ['2015',	52162,	null,	32603,	'opacity: 1;',	29116,	'opacity: 1;',	33121,	'opacity: 1;',	32172,	'opacity: 1;',	34095,	'opacity: 1;',	48580,	'opacity: 1;',	33164,	'opacity: 1;',	58099,	'opacity: 1;'],
  ['2016',	46787,	null,	33275,	'opacity: 1;',	29866,	'opacity: 1;',	36076,	'opacity: 1;',	32391,	'opacity: 1;',	34616,	'opacity: 1;',	50087,	'opacity: 1;',	33242,	'opacity: 1;',	55706,	'opacity: 1;'],
  ['2017',	44628,	null,	34711,	'opacity: 1;',	29713,	'opacity: 1;',	38213,	'opacity: 1;',	33425,	'opacity: 1;',	36430,	'opacity: 1;',	50036,	'opacity: 1;',	33937,	'opacity: 1;',	55403,	'opacity: 1;'],
  ['2018',	43044,	'UK',	35196,	'opacity: 1;',	30491,	'opacity: 1;',	40082,	'opacity: 1;',	34395,	'opacity: 1;',	38098,	'opacity: 1;',	52550,	'opacity: 1;',	34921,	'opacity: 1;',	53411,	'opacity: 1;'],
]);
//South
data[3] = google.visualization.arrayToDataTable([
  ['Time',	'Greece',	{ "type": "string", "role": "style" },	'Italy',	{ "type": "string", "role": "style" },	'Cyprus',	{ "type": "string", "role": "style" },	'Malta',	{ "type": "string", "role": "style" },	'Portugal',	{ "type": "string", "role": "style" },	'Spain',	{ "type": "string", "role": "style" }],
  ['2009',	25186,	'opacity: 1;',	30521,	'opacity: 1;',	21017,	'opacity: 1;',	17406,	'opacity: 1;',	19653,	'opacity: 1;',	24976,	'opacity: 1;'],
  ['2010',	24281,	'opacity: 1;',	30820,	'opacity: 1;',	20103,	'opacity: 1;',	17664,	'opacity: 1;',	19894,	'opacity: 1;',	24451,	'opacity: 1;'],
  ['2011',	22378,	'opacity: 1;',	29903,	'opacity: 1;',	21724,	'opacity: 1;',	18445,	'opacity: 1;',	19230,	'opacity: 1;',	24203,	'opacity: 1;'],
  ['2012',	20508,	'opacity: 1;',	28851,	'opacity: 1;',	21540,	'opacity: 1;',	18623,	'opacity: 1;',	18483,	'opacity: 1;',	23227,	'opacity: 1;'],
  ['2013',	19386,	'opacity: 1;',	28155,	'opacity: 1;',	20625,	'opacity: 1;',	19132,	'opacity: 1;',	18603,	'opacity: 1;',	22608,	'opacity: 1;'],
  ['2014',	20252,	'opacity: 1;',	28996,	'opacity: 1;',	20020,	'opacity: 1;',	19850,	'opacity: 1;',	19518,	'opacity: 1;',	22509,	'opacity: 1;'],
  ['2015',	19783,	'opacity: 1;',	28347,	'opacity: 1;',	20536,	'opacity: 1;',	21905,	'opacity: 1;',	20694,	'opacity: 1;',	23001,	'opacity: 1;'],
  ['2016',	20055,	'opacity: 1;',	28644,	'opacity: 1;',	21861,	'opacity: 1;',	22912,	'opacity: 1;',	22517,	'opacity: 1;',	24527,	'opacity: 1;'],
  ['2017',	20770,	'opacity: 1;',	28846,	'opacity: 1;',	22993,	'opacity: 1;',	24534,	'opacity: 1;',	24628,	'opacity: 1;',	26230,	'opacity: 1;'],
  ['2018',	21428,	'opacity: 1;',	28903,	'opacity: 1;',	25247,	'opacity: 1;',	26018,	'opacity: 1;',	27032,	'opacity: 1;',	27537,	'opacity: 1;'],
]);
//East
data[4] = google.visualization.arrayToDataTable([
  ['Time',	'Poland',	{ "type": "string", "role": "style" },	'Bulgaria',	{ "type": "string", "role": "style" },	'Czechia',	{ "type": "string", "role": "style" },	'Estonia',	{ "type": "string", "role": "style" },	'Croatia',	{ "type": "string", "role": "style" },	'Latvia',	{ "type": "string", "role": "style" },	'Lithuania',	{ "type": "string", "role": "style" },	'Hungary',	{ "type": "string", "role": "style" },	'Romania',	{ "type": "string", "role": "style" },	'Slovenia',	{ "type": "string", "role": "style" },	'Slovakia',	{ "type": "string", "role": "style" }],
  ['2009',	14046,	'opacity: 1;',	9246,	'opacity: 1;',	16306,	'opacity: 1;',	12106,	'opacity: 1;',	17605,	'opacity: 1;',	12110,	'opacity: 1;',	12402,	'opacity: 1;',	13978,	'opacity: 1;',	12102,	'opacity: 1;',	18551,	'opacity: 1;',	15894,	'opacity: 1;'],
  ['2010',	14649,	'opacity: 1;',	9182,	'opacity: 1;',	16745,	'opacity: 1;',	11842,	'opacity: 1;',	16153,	'opacity: 1;',	12293,	'opacity: 1;',	11721,	'opacity: 1;',	12378,	'opacity: 1;',	11613,	'opacity: 1;',	18243,	'opacity: 1;',	16015,	'opacity: 1;'],
  ['2011',	15487,	'opacity: 1;',	8843,	'opacity: 1;',	17985,	'opacity: 1;',	13087,	'opacity: 1;',	15975,	'opacity: 1;',	13253,	'opacity: 1;',	13317,	'opacity: 1;',	14342,	'opacity: 1;',	11258,	'opacity: 1;',	18423,	'opacity: 1;',	15949,	'opacity: 1;'],
  ['2012',	14723,	'opacity: 1;',	8823,	'opacity: 1;',	17165,	'opacity: 1;',	14870,	'opacity: 1;',	15645,	'opacity: 1;',	15335,	'opacity: 1;',	13955,	'opacity: 1;',	12901,	'opacity: 1;',	11392,	'opacity: 1;',	18380,	'opacity: 1;',	16466,	'opacity: 1;'],
  ['2013',	14553,	'opacity: 1;',	8724,	'opacity: 1;',	16650,	'opacity: 1;',	14856,	'opacity: 1;',	15342,	'opacity: 1;',	15915,	'opacity: 1;',	14787,	'opacity: 1;',	12708,	'opacity: 1;',	11318,	'opacity: 1;',	17958,	'opacity: 1;',	16191,	'opacity: 1;'],
  ['2014',	14203,	'opacity: 1;',	9314,	'opacity: 1;',	15899,	'opacity: 1;',	15989,	'opacity: 1;',	15429,	'opacity: 1;',	16487,	'opacity: 1;',	15367,	'opacity: 1;',	12765,	'opacity: 1;',	11380,	'opacity: 1;',	17423,	'opacity: 1;',	16411,	'opacity: 1;'],
  ['2015',	14939,	'opacity: 1;',	9599,	'opacity: 1;',	16556,	'opacity: 1;',	16625,	'opacity: 1;',	15088,	'opacity: 1;',	16003,	'opacity: 1;',	16129,	'opacity: 1;',	13836,	'opacity: 1;',	11847,	'opacity: 1;',	18313,	'opacity: 1;',	16739,	'opacity: 1;'],
  ['2016',	14450,	'opacity: 1;',	10751,	'opacity: 1;',	17394,	'opacity: 1;',	16874,	'opacity: 1;',	16426,	'opacity: 1;',	15857,	'opacity: 1;',	17410,	'opacity: 1;',	14753,	'opacity: 1;',	12207,	'opacity: 1;',	18705,	'opacity: 1;',	16756,	'opacity: 1;'],
  ['2017',	15502,	'opacity: 1;',	10759,	'opacity: 1;',	19523,	'opacity: 1;',	17656,	'opacity: 1;',	17715,	'opacity: 1;',	16289,	'opacity: 1;',	17804,	'opacity: 1;',	16110,	'opacity: 1;',	13351,	'opacity: 1;',	19403,	'opacity: 1;',	17025,	'opacity: 1;'],
  ['2018',	15408,	'opacity: 1;',	10914,	'opacity: 1;',	21525,	'opacity: 1;',	18882,	'opacity: 1;',	18118,	'opacity: 1;',	17102,	'opacity: 1;',	18821,	'opacity: 1;',	15944,	'opacity: 1;',	13929,	'opacity: 1;',	20606,	'opacity: 1;',	17661,	'opacity: 1;'],
]);
var formatter = new google.visualization.NumberFormat(
  {prefix: '€ '});
  formatter.format(data[1],1);
  formatter.format(data[1],2);
  formatter.format(data[1],3);
  formatter.format(data[1],4);
  formatter.format(data[1],5);
  formatter.format(data[1],6);
  formatter.format(data[1],7);
  formatter.format(data[1],8);
  formatter.format(data[1],9);
  formatter.format(data[1],10);
  formatter.format(data[2],1);
  formatter.format(data[2],2);
  formatter.format(data[2],3);
  formatter.format(data[2],4);
  formatter.format(data[2],5);
  formatter.format(data[2],6);
  formatter.format(data[2],7);
  formatter.format(data[2],8);
  formatter.format(data[2],9);
  formatter.format(data[2],10);
  formatter.format(data[2],11);
  formatter.format(data[2],12);
  formatter.format(data[2],13);
  formatter.format(data[2],14);
  formatter.format(data[2],15);
  formatter.format(data[2],16);
  formatter.format(data[2],17);
  formatter.format(data[2],18);
  formatter.format(data[3],1);
  formatter.format(data[3],2);
  formatter.format(data[3],3);
  formatter.format(data[3],4);
  formatter.format(data[3],5);
  formatter.format(data[3],6);
  formatter.format(data[3],7);
  formatter.format(data[3],8);
  formatter.format(data[3],9);
  formatter.format(data[3],10);
  formatter.format(data[3],11);
  formatter.format(data[3],12);
  formatter.format(data[4],1);
  formatter.format(data[4],2);
  formatter.format(data[4],3);
  formatter.format(data[4],4);
  formatter.format(data[4],5);
  formatter.format(data[4],6);
  formatter.format(data[4],7);
  formatter.format(data[4],8);
  formatter.format(data[4],9);
  formatter.format(data[4],10);
  formatter.format(data[4],11);
  formatter.format(data[4],12);
  formatter.format(data[4],13);
  formatter.format(data[4],14);
  formatter.format(data[4],15);
  formatter.format(data[4],16);
  formatter.format(data[4],17);
  formatter.format(data[4],18);
  formatter.format(data[4],19);
  formatter.format(data[4],20);
  formatter.format(data[0],1);
  formatter.format(data[0],2);
  formatter.format(data[0],3);
  formatter.format(data[0],4);
  formatter.format(data[0],5);
  formatter.format(data[0],6);
  formatter.format(data[0],7);
  formatter.format(data[0],8);
  formatter.format(data[0],9);
  formatter.format(data[0],10);
  formatter.format(data[0],11);
  formatter.format(data[0],12);
  formatter.format(data[0],13);
  formatter.format(data[0],14);
  formatter.format(data[0],15);
  formatter.format(data[0],16);
  formatter.format(data[0],17);
  formatter.format(data[0],18);
  formatter.format(data[0],19);
  formatter.format(data[0],20);
  formatter.format(data[0],21);
      formatter.format(data[0], 22);
      formatter.format(data[0], 23);
      formatter.format(data[0], 24);
      formatter.format(data[0], 25);
      formatter.format(data[0], 26);
      formatter.format(data[0], 27);
      formatter.format(data[0], 28);
      formatter.format(data[0], 29);
      formatter.format(data[0], 30);
      formatter.format(data[0], 31);
      formatter.format(data[0], 32);
      formatter.format(data[0], 33);
      formatter.format(data[0], 34);
      formatter.format(data[0], 35);
      formatter.format(data[0], 36);
      formatter.format(data[0], 37);
      formatter.format(data[0], 38);
      formatter.format(data[0], 39);
      formatter.format(data[0], 40);
      formatter.format(data[0], 41);
      formatter.format(data[0], 42);
      formatter.format(data[0], 43);
      formatter.format(data[0], 44);
      formatter.format(data[0], 45);
      formatter.format(data[0], 46);
      formatter.format(data[0], 47);
      formatter.format(data[0], 48);
      formatter.format(data[0], 49);
      formatter.format(data[0], 50);
      formatter.format(data[0], 51);
      formatter.format(data[0], 52);
      formatter.format(data[0], 53);
      formatter.format(data[0], 54);
      formatter.format(data[0], 55);
      formatter.format(data[0], 56);
      formatter.format(data[0], 57);
      formatter.format(data[0], 58);
      formatter.format(data[0], 59);
      formatter.format(data[0], 60);
      formatter.format(data[0], 61);

    var howtight =  2.3;
    var restight =  1.5; 
    var newtight =  1.9; 
    var options = [] 
    //all
    options[0] = {
      height: "500",
      width: "100%",
      title: 'Europe Living Expenses, EUR (2009-2018)',
      titlePosition:'out',
      titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
      vAxis:{title: 'EUR', gridlines:{count:10},
      ticks: [0,10000, 20000, 30000, 40000,50000,60000]},
      hAxis:{title: 'Year'},
      
      'chartArea': {'width': '75%', 'height': '80%'},
      //curveType: 'function',
      legend: { position: 'right',maxLines: 2,textStyle: {fontSize: 12},alignment:'start'},
      annotations: {textStyle: {
        fontSize: 12,
        bold: true,
        // The color of the text.
        color: '#000000',
        // The color of the text outline.
        auraColor: '#00000',
        // The transparency of the text.
        opacity: 0.8
      },
      gradient: {
        x9: '50%', y1: '50%',
        x11: '50%', y2: '50%'}},
      series: {
        0:{color:'#000000', lineWidth: howtight,pointSize: 5, annotations: {stem: {length: 10}}},
        1:{color:'#000000', lineWidth: howtight,pointSize: 5, annotations: {stem: {length: 10}}},
        2:{color:'#4E79A7', lineWidth: restight},
        3:{color:'#4E79A7', lineWidth: restight},
        4:{color:'#4E79A7', lineWidth: restight},
        5:{color:'#4E79A7', lineWidth: restight},
        6:{color:'#4E79A7', lineWidth: restight},
        7:{color:'#59A14F', lineWidth: restight},
        8:{color:'#59A14F', lineWidth: restight},
        9:{color:'#59A14F', lineWidth: restight},
        10:{color:'#59A14F', lineWidth: restight},
        11:{color:'#59A14F', lineWidth: restight},
        12:{color:'#59A14F', lineWidth: restight},
        13:{color:'#59A14F', lineWidth: restight},
        14:{color:'#E15759', lineWidth: restight},
        15:{color:'#E15759', lineWidth: restight},
        16:{color:'#E15759', lineWidth: restight},
        17:{color:'#E15759', lineWidth: restight},
        18:{color:'#E15759', lineWidth: restight},
        19:{color:'#E15759', lineWidth: restight},
        20:{color:'#F28E2B', lineWidth: restight},
        21:{color:'#F28E2B', lineWidth: restight},
        22:{color:'#F28E2B', lineWidth: restight},
        23:{color:'#F28E2B', lineWidth: restight},
        24:{color:'#F28E2B', lineWidth: restight},
        25:{color:'#F28E2B', lineWidth: restight},
        26:{color:'#F28E2B', lineWidth: restight},
        27:{color:'#F28E2B', lineWidth: restight},
        28:{color:'#F28E2B', lineWidth: restight},
        29:{color:'#F28E2B', lineWidth: restight},
        30:{color:'#F28E2B', lineWidth: restight}
        }
    };
//north
options[1] = {
  height: "500",
  width: "100%",
  title: 'North Europe Living Expenses, EUR (2009-2018)',
  titlePosition:'out',
  titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
  vAxis:{title: 'EUR', gridlines:{count:10},
  ticks: [0,10000, 20000, 30000, 40000,50000,60000]},
  hAxis:{title: 'Year'},
  
  'chartArea': {'width': '75%', 'height': '80%'},
  //curveType: 'function',
  legend: { position: 'right',maxLines: 2,textStyle: {fontSize: 12},alignment:'start'},
  annotations: {textStyle: {
    fontSize: 12,
    bold: true,
    // The color of the text.
    color: '#000000',
    // The color of the text outline.
    auraColor: '#00000',
    // The transparency of the text.
    opacity: 0.8
  },
  gradient: {
    x9: '50%', y1: '50%',
    x11: '50%', y2: '50%'}},
  series: {
    0:{color:'#000000', lineWidth: howtight,pointSize: 5, annotations: {stem: {length: 10}}},
    1:{color:'#4E79A7', lineWidth: newtight},
    2:{color:'#4E79A7', lineWidth: newtight},
    3:{color:'#4E79A7', lineWidth: newtight},
    4:{color:'#4E79A7', lineWidth: newtight},
    }
};
//west
options[2] = {
      height: "500",
      width: "100%",
      title: 'West Europe Living Expenses, EUR (2009-2018)',
      titlePosition:'out',
      titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
      vAxis:{title: 'EUR', gridlines:{count:10},
      ticks: [0,10000, 20000, 30000, 40000,50000,60000]},
      hAxis:{title: 'Year'},
      
      'chartArea': {'width': '75%', 'height': '80%'},
      //curveType: 'function',
      legend: { position: 'right',maxLines: 2,textStyle: {fontSize: 12},alignment:'start'},
      annotations: {textStyle: {
        fontSize: 12,
        bold: true,
        // The color of the text.
        color: '#000000',
        // The color of the text outline.
        auraColor: '#00000',
        // The transparency of the text.
        opacity: 0.8
      },
      gradient: {
        x9: '50%', y1: '50%',
        x11: '50%', y2: '50%'}},
      series: {
        0:{color:'#000000', lineWidth: howtight,pointSize: 5, annotations: {stem: {length: 10}}},
        1:{color:'#59A14F', lineWidth: newtight},
        2:{color:'#59A14F', lineWidth: newtight},
        3:{color:'#59A14F', lineWidth: newtight},
        4:{color:'#59A14F', lineWidth: newtight},
        5:{color:'#59A14F', lineWidth: newtight},
        6:{color:'#59A14F', lineWidth: newtight},
        7:{color:'#59A14F', lineWidth: newtight},
        8:{color:'#59A14F', lineWidth: newtight},
        9:{color:'#59A14F', lineWidth: newtight},
 
        }
    };
//south
options[3] = {
  height: "500",
  width: "100%",
  title: 'Sout Europe Living Expenses, EUR (2009-2018)',
  titlePosition:'out',
  titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
  vAxis:{title: 'EUR', gridlines:{count:10},
  ticks: [0,10000, 20000, 30000, 40000,50000,60000]},
  hAxis:{title: 'Year'},
  
  'chartArea': {'width': '75%', 'height': '80%'},
  //curveType: 'function',
  legend: { position: 'right',maxLines: 2,textStyle: {fontSize: 12},alignment:'start'},
  annotations: {textStyle: {
    fontSize: 12,
    bold: true,
    // The color of the text.
    color: '#000000',
    // The color of the text outline.
    auraColor: '#00000',
    // The transparency of the text.
    opacity: 0.8
  },
  gradient: {
    x9: '50%', y1: '50%',
    x11: '50%', y2: '50%'}},
  series: {
    0:{color:'#E15759', lineWidth: newtight},
    1:{color:'#E15759', lineWidth: newtight},
    2:{color:'#E15759', lineWidth: newtight},
    3:{color:'#E15759', lineWidth: newtight},
    4:{color:'#E15759', lineWidth: newtight},
    5:{color:'#E15759', lineWidth: newtight},
    6:{color:'#E15759', lineWidth: newtight},
    }
};
//east
options[4] = {
  height: "500",
  width: "100%",
  title: 'East Europe Living Expenses, EUR (2009-2018)',
  titlePosition:'out',
  titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
  vAxis:{title: 'EUR', gridlines:{count:10},
  ticks: [0,10000, 20000, 30000, 40000,50000,60000]},
  hAxis:{title: 'Year'},
  
  'chartArea': {'width': '75%', 'height': '80%'},
  //curveType: 'function',
  legend: { position: 'right',maxLines: 2,textStyle: {fontSize: 12},alignment:'start'},
  annotations: {textStyle: {
    fontSize: 12,
    bold: true,
    // The color of the text.
    color: '#000000',
    // The color of the text outline.
    auraColor: '#00000',
    // The transparency of the text.
    opacity: 0.8
  },
  gradient: {
    x9: '50%', y1: '50%',
    x11: '50%', y2: '50%'}},
  series: {
    0:{color:'#F28E2B', lineWidth: newtight},
    1:{color:'#F28E2B', lineWidth: newtight},
    2:{color:'#F28E2B', lineWidth: newtight},
    3:{color:'#F28E2B', lineWidth: newtight},
    4:{color:'#F28E2B', lineWidth: newtight},
    5:{color:'#F28E2B', lineWidth: newtight},
    6:{color:'#F28E2B', lineWidth: newtight},
    7:{color:'#F28E2B', lineWidth: newtight},
    8:{color:'#F28E2B', lineWidth: newtight},
    9:{color:'#F28E2B', lineWidth: newtight},
    10:{color:'#F28E2B', lineWidth: newtight},
    11:{color:'#F28E2B', lineWidth: newtight},
    }
};
    //var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    //chart.draw(data[0], options); 

    ////
    
    var chart = new google.visualization.ChartWrapper({
      containerId: 'curve_chart'
  });

  var lineButton1 = document.getElementById('b1');
  var lineButton2 = document.getElementById('b2');
  var lineButton3 = document.getElementById('b3');
  var lineButton4 = document.getElementById('b4');
  var lineButton5 = document.getElementById('b5');
 


  function drawLine1() {
    chart.setOptions(options[0]);
    chart.setChartType('LineChart');
    chart.setDataTable(data[0]);
    chart.draw();
}

function drawLine2() {
  chart.setOptions(options[1]);
    chart.setChartType('LineChart');
    chart.setDataTable(data[1]);
    chart.draw();
}
function drawLine3() {
  chart.setOptions(options[2]);
  chart.setChartType('LineChart');
  chart.setDataTable(data[2]);
  chart.draw();
}
function drawLine4() {
  chart.setOptions(options[3]);
  chart.setChartType('LineChart');
  chart.setDataTable(data[3]);
  chart.draw();
}
function drawLine5() {
  chart.setOptions(options[4]);
  chart.setChartType('LineChart');
  chart.setDataTable(data[4]);
  chart.draw();
}

lineButton1.onclick = function () {
  drawLine1();
}

lineButton2.onclick = function () {
  drawLine2();
}
lineButton3.onclick = function () {
  drawLine3();
}
lineButton4.onclick = function () {
  drawLine4();
}
lineButton5.onclick = function () {
  drawLine5();
}
drawLine1();
 //// 
}
google.charts.setOnLoadCallback(draw1Chart);



//3rd graph
function draw3Chart() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
      ['Country',	'2 Year',	{type: 'number', role: 'tooltip'},	'5 Year',	{type: 'number', role: 'tooltip'},	'10 Year',	{type: 'number', role: 'tooltip'},	'20 Year',	{type: 'number', role: 'tooltip'}],
      ['Iceland',	107371,	{v:107371, f: '107,371 €'},	173440,	{v:280810, f: '280,810 €'},	325536,	{v:606346, f: '606,346 €'},	814879,	{v:1421225, f: '1,421,225 €'}],
      ['Luxembourg',	106554,	{v:106554, f: '106,554 €'},	171146,	{v:277700, f: '277,700 €'},	318310,	{v:596010, f: '596,010 €'},	783075,	{v:1379085, f: '1,379,085 €'}],
      ['Switzerland',	107890,	{v:107890, f: '107,890 €'},	170062,	{v:277952, f: '277,952 €'},	306882,	{v:584834, f: '584,834 €'},	712910,	{v:1297744, f: '1,297,744 €'}],
      ['Norway',	101242,	{v:101242, f: '101,242 €'},	159584,	{v:260826, f: '260,826 €'},	287973,	{v:548799, f: '548,799 €'},	668983,	{v:1217782, f: '1,217,782 €'}],
      ['Ireland',	81366,	{v:81366, f: '81,366 €'},	131434,	{v:212800, f: '212,800 €'},	246694,	{v:459494, f: '459,494 €'},	617522,	{v:1077016, f: '1,077,016 €'}],
      ['UK',	86949,	{v:86949, f: '86,949 €'},	137054,	{v:224002, f: '224,002 €'},	247317,	{v:471319, f: '471,319 €'},	574535,	{v:1045854, f: '1,045,854 €'}],
      ['Denmark',	86460,	{v:86460, f: '86,460 €'},	136283,	{v:222743, f: '222,743 €'},	245926,	{v:468669, f: '468,669 €'},	571305,	{v:1039974, f: '1,039,974 €'}],
      ['Sweden',	83171,	{v:83171, f: '83,171 €'},	131099,	{v:214271, f: '214,271 €'},	236572,	{v:450843, f: '450,843 €'},	549575,	{v:1000417, f: '1,000,417 €'}],
      ['Germany',	76958,	{v:76958, f: '76,958 €'},	121305,	{v:198263, f: '198,263 €'},	218898,	{v:417161, f: '417,161 €'},	508517,	{v:925679, f: '925,679 €'}],
      ['Finland',	74025,	{v:74025, f: '74,025 €'},	116682,	{v:190707, f: '190,707 €'},	210556,	{v:401262, f: '401,262 €'},	489137,	{v:890399, f: '890,399 €'}],
      ['Austria',	71096,	{v:71096, f: '71,096 €'},	112065,	{v:183161, f: '183,161 €'},	202224,	{v:385385, f: '385,385 €'},	469783,	{v:855168, f: '855,168 €'}],
      ['Netherlands',	70540,	{v:70540, f: '70,540 €'},	111190,	{v:181730, f: '181,730 €'},	200644,	{v:382374, f: '382,374 €'},	466112,	{v:848486, f: '848,486 €'}],
      ['France',	69478,	{v:69478, f: '69,478 €'},	109515,	{v:178992, f: '178,992 €'},	197622,	{v:376615, f: '376,615 €'},	459091,	{v:835706, f: '835,706 €'}],
      ['Portugal',	55145,	{v:55145, f: '55,145 €'},	91268,	{v:146413, f: '146,413 €'},	178134,	{v:324548, f: '324,548 €'},	480410,	{v:804958, f: '804,958 €'}],
      ['Malta',	53077,	{v:53077, f: '53,077 €'},	87845,	{v:140921, f: '140,921 €'},	171452,	{v:312374, f: '312,374 €'},	462389,	{v:774763, f: '774,763 €'}],
      ['Cyprus',	51558,	{v:51558, f: '51,558 €'},	85777,	{v:137335, f: '137,335 €'},	168828,	{v:306163, f: '306,163 €'},	462675,	{v:768838, f: '768,838 €'}],
      ['Czechia',	44220,	{v:44220, f: '44,220 €'},	75758,	{v:119978, f: '119,978 €'},	156328,	{v:276307, f: '276,307 €'},	469098,	{v:745405, f: '745,405 €'}],
      ['Belgium',	61592,	{v:61592, f: '61,592 €'},	97084,	{v:158676, f: '158,676 €'},	175191,	{v:333867, f: '333,867 €'},	406982,	{v:740849, f: '740,849 €'}],
      ['Italy',	58384,	{v:58384, f: '58,384 €'},	92028,	{v:150412, f: '150,412 €'},	166067,	{v:316479, f: '316,479 €'},	385786,	{v:702264, f: '702,264 €'}],
      ['Spain',	55625,	{v:55625, f: '55,625 €'},	87679,	{v:143303, f: '143,303 €'},	158218,	{v:301521, f: '301,521 €'},	367553,	{v:669074, f: '669,074 €'}],
      ['Estonia',	38696,	{v:38696, f: '38,696 €'},	65505,	{v:104201, f: '104,201 €'},	132586,	{v:236787, f: '236,787 €'},	383359,	{v:620146, f: '620,146 €'}],
      ['Lithuania',	38575,	{v:38575, f: '38,575 €'},	65338,	{v:103914, f: '103,914 €'},	132369,	{v:236283, f: '236,283 €'},	383406,	{v:619689, f: '619,689 €'}],
      ['Slovenia',	41797,	{v:41797, f: '41,797 €'},	67254,	{v:109051, f: '109,051 €'},	125442,	{v:234493, f: '234,493 €'},	310286,	{v:544779, f: '544,779 €'}],
      ['Greece',	43284,	{v:43284, f: '43,284 €'},	68227,	{v:111512, f: '111,512 €'},	123118,	{v:234630, f: '234,630 €'},	286012,	{v:520642, f: '520,642 €'}],
      ['Croatia',	36864,	{v:36864, f: '36,864 €'},	60233,	{v:97097, f: '97,097 €'},	115151,	{v:212248, f: '212,248 €'},	298515,	{v:510763, f: '510,763 €'}],
      ['Slovakia',	35675,	{v:35675, f: '35,675 €'},	56233,	{v:91908, f: '91,908 €'},	101474,	{v:193382, f: '193,382 €'},	235731,	{v:429113, f: '429,113 €'}],
      ['Hungary',	32366,	{v:32366, f: '32,366 €'},	52282,	{v:84648, f: '84,648 €'},	98131,	{v:182779, f: '182,779 €'},	245640,	{v:428419, f: '428,419 €'}],
      ['Romania',	28454,	{v:28454, f: '28,454 €'},	47410,	{v:75864, f: '75,864 €'},	93542,	{v:169406, f: '169,406 €'},	257553,	{v:426959, f: '426,959 €'}],
      ['Latvia',	34546,	{v:34546, f: '34,546 €'},	54453,	{v:88999, f: '88,999 €'},	98262,	{v:187261, f: '187,261 €'},	228270,	{v:415531, f: '415,531 €'}],
      ['Poland',	31124,	{v:31124, f: '31,124 €'},	49059,	{v:80183, f: '80,183 €'},	88529,	{v:168712, f: '168,712 €'},	205659,	{v:374371, f: '374,371 €'}],
      ['Bulgaria',	22337,	{v:22337, f: '22,337 €'},	37570,	{v:59907, f: '59,907 €'},	75257,	{v:135165, f: '135,165 €'},	213303,	{v:348468, f: '348,468 €'}],
    ]);

    var options = {
      height: "530",
      width: "100%",
    title: 'Total amount of living expenses in the future, EUR (2020-2040)', 
    titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
    isStacked:true,
    'chartArea': {'width': '80%', 'height': '80%'},
    legend: { position: 'bottom',textStyle: {fontSize: 14} },
    hAxis:{gridlines:{color:'#000000'},title: 'EUR',textStyle: {fontSize: 13},
    ticks: [200000, 400000, 600000, 800000,1000000,1200000,1400000,1600000]},
    //title: 'EUR',
    //titleTextStyle: {
    //  color: '#000000',
    //  fontSize: 11
    //},
    //'format': '\u20AC '},
    focusTarget: 'category',
    // Use an HTML tooltip.
    tooltip: { isHtml: true },
    //
    vAxis:{title:'Country',gridlines:{color:'#000000'},textStyle: {fontSize: 12}},
    series:{0:{color:'#CEF254'},1:{color:'#FFC300'},2:{color:'#FF5733'},3:{color:'#C70039'},4:{color:'#900C3F'}}};   

    // Instantiate and draw the chart.
    var chart = new google.visualization.BarChart(document.getElementById('container'));
    chart.draw(data, options);

}
google.charts.setOnLoadCallback(draw3Chart);

//4th graph

function draw4Chart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
    ['Expenses',	'Rent',	'Miscellaneous Good and services',	'Transport Services',	'Food and Beverages',	'Health',	'Other Expenses'],
    ['UK',	{v:49, f: '49%'},	{v:9, f: '9%'},	{v:7, f: '7%'},	{v:4, f: '4%'},	{v:0, f: '0%'},	{v:31, f: '31%'}],
    ['Hungary',	{v:47, f: '47%'},	{v:6, f: '6%'},	{v:6, f: '6%'},	{v:8, f: '8%'},	{v:0, f: '0%'},	{v:33, f: '33%'}],
    ['Romania',	{v:46, f: '46%'},	{v:3, f: '3%'},	{v:5, f: '5%'},	{v:12, f: '12%'},	{v:0, f: '0%'},	{v:34, f: '34%'}],
    ['Poland',	{v:43, f: '43%'},	{v:8, f: '8%'},	{v:6, f: '6%'},	{v:8, f: '8%'},	{v:0, f: '0%'},	{v:35, f: '35%'}],
    ['Bulgaria',	{v:40, f: '40%'},	{v:4, f: '4%'},	{v:7, f: '7%'},	{v:9, f: '9%'},	{v:0, f: '0%'},	{v:40, f: '40%'}],
    ['Switzerland',	{v:40, f: '40%'},	{v:13, f: '13%'},	{v:6, f: '6%'},	{v:0, f: '0%'},	{v:11, f: '11%'},	{v:30, f: '30%'}],
    ['Norway',	{v:36, f: '36%'},	{v:13, f: '13%'},	{v:8, f: '8%'},	{v:0, f: '0%'},	{v:11, f: '11%'},	{v:32, f: '32%'}],
    ['Luxembourg',	{v:34, f: '34%'},	{v:16, f: '16%'},	{v:9, f: '9%'},	{v:0, f: '0%'},	{v:9, f: '9%'},	{v:32, f: '32%'}],
    ['Iceland',	{v:33, f: '33%'},	{v:9, f: '9%'},	{v:8, f: '8%'},	{v:0, f: '0%'},	{v:10, f: '10%'},	{v:40, f: '40%'}],
          ]);

  var options = {
    height: "500",
    width: "100%",
  title: 'Cost Distribution by % from the total living expenses', 
  titleTextStyle:{fontSize:16, color:'#000000',fontName: "Times New Roman"},
  //isStacked:true,
  isStacked:true,
  'chartArea': {'width': '78%', 'height': '80%','left':'6%'},
  legend: { position: 'right',textStyle: {fontSize: 14} },
  hAxis:{gridlines:{color:'#000000'},title: 'Country',textStyle: {fontSize: 12}},


  tooltip: { isHtml: true },
  //
  vAxis:{gridlines:{color:'#000000'},textStyle: {fontSize:14},title: 'Percentages',
  format: '#\'%\'',
  ticks: [25, 50, 75, 100]
  },
  series:{0:{color:'#900C3F'},1:{color:'#c70039'},2:{color:'#FF5733'},3:{color:'#FFC300'},4:{color:'#3498DB'},
  5:{color:'#707B7C'}}};   

  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(draw4Chart);
