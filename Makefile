test:
	@ npm test

%:
	# JS
	@ ./warpaint.js test/war/$@.txt > .test
	@ git --no-pager diff --no-index test/html/$@.html .test
	# Python
	@ ./warpaint.py test/war/$@.txt > .test
	@ git --no-pager diff --no-index test/html/$@.html .test
	@ rm .test

.PHONY: test
