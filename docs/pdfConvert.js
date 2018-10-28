const markdownpdf = require("markdown-pdf");

markdownpdf().from("./AdministrationManual.md").to("./PDF/AdministrationManual.pdf", function () {
	console.log("Administration Manual to pdf done");
});

markdownpdf().from("./DesignReport.md").to("./PDF/DesignReport.pdf", function () {
	console.log("Design Report to pdf done");
});

markdownpdf().from("./DevelopmentManual.md").to("./PDF/DevelopmentManual.pdf", function () {
	console.log("Development Manual to pdf done");
});