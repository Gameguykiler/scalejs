﻿/*global require,define,describe,expect,it*/
/// <reference path="../Scripts/jasmine.js"/>
define(['../js/scalejs/base.array'], function (array) {
    'use strict';

    describe('base.array', function () {
        describe('indexOf', function () {
            it('correctly returns index of an existing element', function () {
                var a = [1, 5, 3];
                expect(array.indexOf(a, 5)).toBe(1);
            });

            it('returns -1 for non-existing element', function () {
                var a = [1, 5, 3];
                expect(array.indexOf(a, 6)).toBe(-1);
            });
        });
    });
});