const Fs = require('fs')
const Path = require('path')
const Sass = require('sass')



const result = Sass.compileAsync({
    data: Fs.readFileSync(
            Path.resolve('src/global.scss')
        ).toString(),
        outputStyle: 'expanded',
        outFile: 'global.css',
        includePaths: [Path.resolve('src')]
})

console.log(result.css)
/*
 Fs.writeFileSync(
        Path.resolve('src/lib/global.css'),
        result.css.toString()
    )



const compile = (path, fileName) => {

    const result = Sass.renderSync({
        data: Fs.readFileSync(
                Path.resolve(path)
            ).toString(),
            outputStyle: 'expanded',
            outFile: 'global.scss',
            includePaths: [Path.resolve('src')]
    })

    Fs.writeFileSync(
        Path.resolve(fileName),
        result.css.toString()
    )
}

compile('src/global.scss', 'src/lib/global.css');
*/
