const markdownpdf = require("markdown-pdf");

markdownpdf().from("./docs/AdministrationManual.md").to("./docs/PDF/AdministrationManual.pdf", function () {
	console.log("Administration Manual to pdf done");
});

markdownpdf().from("./docs/DesignReport.md").to("./docs/PDF/DesignReport.pdf", function () {
	console.log("Design Report to pdf done");
});

markdownpdf().from("./docs/DevelopmentManual.md").to("./docs/PDF/DevelopmentManual.pdf", function () {
	console.log("Development Manual to pdf done");
});