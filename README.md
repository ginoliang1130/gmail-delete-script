Google App Script for batch delete Gmail category or label.

Fork https://gist.github.com/gene1wood/0f455239490e5342fa49.

Source https://support.google.com/mail/forum/AAAAK7un8RUYeQVDuPIQzA/?hl=en&msgid=kpZPDDj8TXkJ&gpf=d/msg/gmail/YeQVDuPIQzA/kpZPDDj8TXkJ.

使用 Google Apps Scrips 來驅動這個小工具，每次啟動只能刪除 400 封郵件，最高 500 thread. 超過 google 則會返回錯誤。

This script, when used with Google Apps Scripts will delete 400 emails and can be triggered to run every few minutes without user interaction enabling you to bulk delete email in Gmail without getting the #793 error from Gmail.

Google returns a maximum of 500 threads. This limits to 400 threads in case 500 threads is causing timeouts
Configure the search query in the code below to match the type of emails you want to delete.

打開 Google Apps Scrips https://script.google.com/ 新增專案
將 code 複製貼上，並調整需要的參數。

參數選項：

    var threads = GmailApp.search('category:forums'); // var threads = GmailApp.search('category:forums older_than:1m ');
    
    category:inbox、forums、social、updates、promotions
    
    label:Self-configured filters example:alert; edm.
    
    older_than:(1m、1d、1h)
    
Browser to https://script.google.com/.
Start a script and paste in the code below. 

可加入觸發條件，依照自訂時間觸發程式。

After you past it in, save it and click the little clock looking button.
This is for your triggers. You can set up how frequently you want the script
to run (I did mine for every minute but others are seeing execution take longer than
a minute in which case you may want to run every 5 or 15 minutes).
