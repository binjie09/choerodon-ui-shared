const merge2 = require('merge2');
const babel = require('gulp-babel');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const ts = require('gulp-typescript');
const gulp = require('gulp');
const rimraf = require('rimraf');
const sourcemaps = require('gulp-sourcemaps');
const getBabelCommonConfig = require('./tools/getBabelCommonConfig');
const tsConfig = require('./tools/getTSCommonConfig')();

const tsDefaultReporter = ts.reporter.defaultReporter();
const libDir = path.resolve('lib');

function babelify(js) {
  const babelConfig = getBabelCommonConfig();
  return js
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfig))
    .pipe(sourcemaps.write('.'));
}

function compile() {
  let error = 0;
  const source = ['src/**/*.tsx', 'src/**/*.ts', 'typings/**/*.d.ts'];
  const tsResult = gulp.src(source).pipe(
    ts(tsConfig, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    }),
  );

  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1);
    }
  }

  tsResult.on('finish', check);
  tsResult.on('end', check);

  return merge2([babelify(tsResult.js), tsResult.dts]);
}

gulp.task('compile', done => {
  rimraf.sync(libDir);
  compile()
    .pipe(gulp.dest(libDir))
    .on('finish', done);
});
