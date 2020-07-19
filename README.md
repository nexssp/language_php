# PHP Implementation for Nexss Programmer

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Example

```sh
nexss file add myprogram.php # this will display templates (from the folder templates)
nexss myprogram.php # will compile and execute
```

## PHP related

```txt
<!-- https://stackoverflow.com/questions/732832/php-exec-vs-system-vs-passthru -->
+----------------+-----------------+----------------+----------------+
|    Command     | Displays Output | Can Get Output | Gets Exit Code |
+----------------+-----------------+----------------+----------------+
| system()       | Yes (as text)   | Last line only | Yes            |
| passthru()     | Yes (raw)       | No             | Yes            |
| exec()         | No              | Yes (array)    | Yes            |
| shell_exec()   | No              | Yes (string)   | No             |
| backticks (``) | No              | Yes (string)   | No             |
+----------------+-----------------+----------------+----------------+
```
