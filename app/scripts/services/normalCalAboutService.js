angular.module('calculatorApp')
    .service('normalCalService', function() {
        var self = this;

        /*记录显示屏第一、二行内容，分别初始化为“空、0”*/
		self.inputs = "";
		self.results = "0";
    });
