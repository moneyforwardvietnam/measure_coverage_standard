var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":6,"methods":[{"el":19,"sc":5,"sl":16},{"el":24,"sc":5,"sl":21},{"el":29,"sc":5,"sl":26}],"name":"JavaCoverageTests","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":21}],"name":"testTC2","pass":true,"statements":[{"sl":23}]},"test_1":{"methods":[{"sl":16}],"name":"testTC1","pass":true,"statements":[{"sl":18}]},"test_2":{"methods":[{"sl":26}],"name":"testTC3","pass":true,"statements":[{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [], [], [0], [], [0], [], [], [2], [], [2], [], []]
