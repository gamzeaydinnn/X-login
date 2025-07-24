require("dotenv").config();
const { test, expect } = require("@playwright/test");
test("Login, check inbox, send message", async ({ page }) => {
  // Reddit login sayfasına git
  await page.goto("https://x.com/?lang=tr");

  // Giriş bilgileri

  const mail = process.env.MAIL;
  const password = process.env.PASSWORD;
  const username = process.env.USERNAMEE;
  // giriş yapma butonu göründü
  await page.getByTestId("loginButton").waitFor();
  await expect(page.getByTestId("loginButton")).toBeVisible();

  // giriş yap butonuna bas
  await page.getByTestId("loginButton").click();

  // "İleri" butonu için bekle ve görünürlüğünü kontrol et
  await page.getByRole("button", { name: "İleri" }).waitFor();
  await expect(page.getByRole("button", { name: "İleri" })).toBeVisible();

  // email veya telefon numarası kutusuna yaz
  await page
    .getByRole("textbox", { name: "Telefon numarası, e-posta" })
    .waitFor();
  await page
    .getByRole("textbox", { name: "Telefon numarası, e-posta" })
    .fill(mail);

  // "İleri" butonuna tekrar bas
  await page.getByRole("button", { name: "İleri" }).waitFor();
  await page.getByRole("button", { name: "İleri" }).click();

  // kullanıcı adı kutusu geldiğinde doldur

  await page.waitForTimeout(1000);
  await page.getByTestId("ocfEnterTextTextInput").waitFor();
  await page.waitForTimeout(1000);
  await page.getByTestId("ocfEnterTextTextInput").fill(username);

  //
  //  "İleri" butonu (kullanıcı adı sonrası) görünür mü kontrol et

  await page.getByTestId("ocfEnterTextNextButton").waitFor();
  await expect(page.getByTestId("ocfEnterTextNextButton")).toBeVisible();
  await page.getByTestId("ocfEnterTextNextButton").click();

  // şifre ekranı geldiğinde şifre kutusunu doldur
  await page.getByRole("textbox", { name: "Şifre Şifreyi göster" }).waitFor();
  await page
    .getByRole("textbox", { name: "Şifre Şifreyi göster" })
    .fill(password);

  // "Giriş Yap" butonu görünür ve bas
  await page.getByTestId("LoginForm_Login_Button").waitFor();
  await expect(page.getByTestId("LoginForm_Login_Button")).toBeVisible();
  await page.getByTestId("LoginForm_Login_Button").click();

  // ana sayfa yüklenince DM sekmesi görünür
  await page.getByTestId("AppTabBar_DirectMessage_Link").waitFor();
  await expect(page.getByTestId("AppTabBar_DirectMessage_Link")).toBeVisible();
  await page.getByTestId("AppTabBar_DirectMessage_Link").click();
  //mesaj
  await page.getByTestId("conversation").first().waitFor();
  const mesajsayisi = await page.getByTestId("conversation").count();
  console.log("Mesaj sayısı:", mesajsayisi);

  // yeni mesaj butonuna hazırlan
  await page.getByTestId("NewDM_Button").waitFor();
  await expect(page.getByTestId("NewDM_Button")).toBeVisible();
  await page.getByTestId("NewDM_Button").click();

  // kişi arama kutusuna isim yaz
  await page.getByTestId("searchPeople").waitFor();
  await page.getByTestId("searchPeople").fill("BolukbasK9539");

  // aranan kullanıcı çıktı mı bekle
  await page.waitForTimeout(1000);
  await page.getByTestId("TypeaheadUser").waitFor();
  await expect(page.getByTestId("TypeaheadUser")).toBeVisible();
  await page.getByTestId("TypeaheadUser").click();

  // ileri butonuna git
  await page.getByTestId("nextButton").waitFor();
  await expect(page.getByTestId("nextButton")).toBeVisible();
  await page.waitForTimeout(1000);
  await page.getByTestId("nextButton").click();

  // mesaj yazma kutusunu doldur
  await page.getByTestId("dmComposerTextInput").waitFor();
  await page
    .getByTestId("dmComposerTextInput")
    .locator("div")
    .nth(2)
    .fill("mrb");

  // "Enter" tuşuna bas (mesajı göndermek için)
  await page.getByTestId("dmComposerSendButton").waitFor();
  await expect(page.getByTestId("dmComposerSendButton")).toBeVisible();
  await page.getByTestId("dmComposerSendButton").click();

  // yeni mesaj sayısı
  await page.getByTestId("conversation").first().waitFor();
  const mesajsayisi2 = await page.getByTestId("conversation").count();
  console.log("Mesaj sayısı:", mesajsayisi2);
});
