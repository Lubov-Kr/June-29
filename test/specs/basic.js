const {expect} = require('chai');

describe('Login', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://mail.ru/');
    });

    it('should enter username and password', function () {
        const inputName = $('#mailbox .i-no-right-radius');
        inputName.setValue('milisal');
        $('.o-control[type=submit]').click();
        browser.pause(3000);
        $('.mailbox__input_password').setValue('ghjPhtdibqrepm13Vf');
        browser.pause(3000);
        $('input.o-control').click();
    });

})
//5.