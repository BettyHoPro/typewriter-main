const sentence = "hello there from lighthouse labs\n";
for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, 50 * char);
}
