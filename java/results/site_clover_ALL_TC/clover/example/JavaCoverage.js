var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":0,"methods":[{"el":9,"sc":5,"sl":4}],"name":"JavaCoverage","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":4}],"name":"testTC2","pass":true,"statements":[{"sl":5},{"sl":8}]},"test_1":{"methods":[{"sl":4}],"name":"testTC1","pass":true,"statements":[{"sl":5},{"sl":6}]},"test_2":{"methods":[{"sl":4}],"name":"testTC3","pass":true,"statements":[{"sl":5},{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [1, 0, 2], [1, 0, 2], [1], [], [0, 2], [], []]
