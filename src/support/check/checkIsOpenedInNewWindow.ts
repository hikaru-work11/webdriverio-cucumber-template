/**
 * 新しいタブ/ウィンドウが開いて、指定 URL が表示されていることを確認する。
 * 検証後は元のウィンドウに戻る。
 */
export default async (expectedUrl: string, windowType: string) => {
  const original = await browser.getWindowHandle();
  const handles = await browser.getWindowHandles();

  expect(handles.length).toBeGreaterThan(1);

  const target = handles.find((h) => h !== original);
  if (!target) {
    throw new Error(`追加の${windowType}が開いていません`);
  }

  await browser.switchToWindow(target);

  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain(expectedUrl);

  await browser.switchToWindow(original);
};
  
