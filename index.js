const latex = require('node-latex')
const fs = require('fs')
// TODO: Fix so that npm can generate the pdf
const { createReadStream, createWriteStream } = require("fs");
const { join } = require("path");
const latex = require("../..");

const input = createReadStream(join(__dirname, "latex/*.tex"));
const output = createWriteStream(join(__dirname, "output.pdf"));

latex(input).pipe(output);
 
pdf.pipe(output)
pdf.on('error', err => console.error(err))
pdf.on('finish', () => console.log('PDF generated!'))
