define([
        'jquery',
        'lodash',
        '../util/find-get-param.js',
    ], function($, _, FindGetParam) {
    var testWrapper = function() {
        this.currentTest = '';
        this.startTime = 0;
        this.testQuantity = 0;
        this.testFailed = 0;
        this.testSucceed = 0;
        this.testTotalTime = 0;
        this.$resultContainer = $('.TestResultsArea');
        this.$testReportContainer = $('.TestReport');
        this.$testQuantity = this.$testReportContainer.find('.tests-quantity');
        this.$testSuceedQuantity =
            this.$testReportContainer.find('.tests-succeed-quantity');
        this.$testFailedQuantity =
            this.$testReportContainer.find('.tests-failed-quantity');
        this.$testTimer =
            this.$testReportContainer.find('.tests-time');

        this.grepSearch = FindGetParam('grep');
        this.failOnly = !!$.parseJSON(FindGetParam('failOnly'));

        this.execTest = function(mainName, testName, testFn) {
            var myself = this;
            var validTest = true;

            if (this.grepSearch) {
                validTest = _.includes(mainName, this.grepSearch)
                    || _.includes(testName, this.grepSearch);
            }

            if (!validTest) {
                return;
            }

            setTimeout(function() {
                var startTime = new Date();
                var succeed = null;
                var errorMsg = null;
                try {
                    testFn();
                    succeed = true;
                } catch (error) {
                    succeed = false;
                    errorMsg = error;
                }
                var timeSpent = new Date() - startTime;

                if ((myself.failOnly && !succeed) || !myself.failOnly) {
                    myself.testQuantity++;
                    myself.testTotalTime += timeSpent;
                    console[succeed ? 'log' : 'error']('Test #' + myself.testQuantity
                        + ' "' + mainName + ' | ' + testName + '" took ' + timeSpent + 'ms to ' +
                        (succeed ? 'SUCCEED' : 'FAILED')
                        + '.');
                    if (!succeed) {
                        console.error(errorMsg);
                        $('.action-button-failOnly').removeAttr('disabled');
                    }
                    myself.updateCounters(succeed);
                    myself.renderTest(succeed, mainName, testName, timeSpent, errorMsg);
                }
            }, 0);
        }

        this.updateCounters = function(succeed) {
            if (succeed) {
                this.testSucceed++;
            } else {
                this.testFailed++;
            }

            this.$testQuantity.text(this.testQuantity);
            this.$testSuceedQuantity.text(this.testSucceed);
            this.$testFailedQuantity.text(this.testFailed);
            this.$testTimer.text(this.testTotalTime);
        }

        this.createTestClass = function(mainName) {
            return 'testBlock-' + _.replace(mainName, ' ', '_');
        }

        this.getTestContainer = function(mainName) {
            var className = this.createTestClass(mainName);
            var $container = this.$resultContainer.find('.' + className);

            if (!$container.length) {
                $container = $('<div>',{
                    class: className,
                });
                $ul = $('<ul>');
                $title = $('<h3>', {
                    text: mainName,
                });
                $container.append($title);
                $container.append($ul);
                this.$resultContainer.append($container);
            }

            return $container.find('ul');
        }

        this.renderTest = function(succeed, mainName, name, time, errorMsg) {
            var $container = this.getTestContainer(mainName);
            var $result = $('<li/>', {
                class: 'mdl-list__item',
            });
            var iconName = succeed ? 'done' : 'close';
            var checked = succeed ? 'checked' : '';
            var secondaryBlock = succeed ? `${time} ms` : errorMsg;
            var iconClass = succeed ? 'icon-succeed' : 'icon-failed';
            var $testStatus = $(`
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar ${iconClass}">
                        ${iconName}
                    </i>
                    ${name}
                </span>
                <span class="mdl-list__item-secondary-action">
                    ${secondaryBlock}
                </span>`
            );
            $result.append($testStatus);
            $container.append($result);
        }
    };

    return new testWrapper();
});
