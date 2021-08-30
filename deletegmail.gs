function batchDeleteEmail() {
  var batchSize = 100 // Process up to 100 threads at once
  // 如果需要時間可以加上 [older_than:00m、00d、00h]，[category:] 可換成 [label:]
  var threads = GmailApp.search('category:forums');
  console.log('batch size is: ' + threads.length);
  for (j = 0; j < threads.length; j+=batchSize) {
    console.log('removing batch: ' + j);
    GmailApp.moveThreadsToTrash(threads.slice(j, j+batchSize));
  }
}