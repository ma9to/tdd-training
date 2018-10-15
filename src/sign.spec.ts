import { User } from "./sign";

// ユーザー
// 氏名、会社名、メールアドレス、パスワード、がある
fdescribe('User', () => {
    const data: any = {
        name: '熊谷',
        corporateName: '株式会社クマタニ',
        emailAddress: 'masahiro.kumatani@bizreach.co.jp'
    };

    const user = new User(data);
    it(`ユーザー名が${data.name}であること`, () => {
        expect(data.name).toBe(user.name);
    });
    it(`会社名が${data.corporateName}であること`, () => {
        expect(data.corporateName).toBe(user.corporateName);
    });
    it(`メールアドレスが${data.emailAddress}であること`, () => {
        expect(data.emailAddress).toBe(user.emailAddress);
    });
});

// 検証ができる
// パスワード8文字以上
// 会社名: 氏名 OK
// 会社名がない場合は氏名のみ表示
// 検証結果が後ろにつく OK or NG