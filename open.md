---
layout: single-page-md
title: TOKI KSN Open Contest 2020 (English)
key: open
---

### Preface

- **TOKI KSN Open Contest 2020** is an open competition mirroring the National Science Olympiad in Informatics 2020 in Indonesia (**KSN 2020 Bidang Informatika** in Bahasa).
- KSN Informatika is a national olympiad in informatics for high school students. It is one of the stages required for Indonesian students to represent Indonesia in IOI (International Olympiad in Informatics)
- The problemset is the same as the problemset in KSN 2020 Bidang Informatika and will be given in both Bahasa Indonesia and English.
- The contest will be held on [TLX (TOKI Online Judge)](https://tlx.toki.id/contests) (you may need to register for a TLX account if you do not have one).
- If you have any questions please contact [prabowo1048576@gmail.com](mailto:prabowo1048576@gmail.com).

<br>

### Rules Overview

* There will be **one trial session** and **2 (two) competition days**.
* Result of the trial session does **not** affect scoring.
* There will be **3 (three) problems** on each day to be solved in **5 (five) hours**.
* Each contestant may submit up to **50 submissions** for each problem.
* The supported programming languages are **C, C++, and Pascal**.
* During the competition, each contestant can only see their own scores.

<br>

### Schedule and Technical Details

- The contests will be held at the following time ranges:
* **Day 0**: [12 October 2020 09:00 - 21:30 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=TOKI+KSN+Open+Contest+2020+Day+0&iso=20201012T1600&p1=108&ah=12&am=30) (trial session)
* **Day 1**: [13 October 2020 06:30 - 21:30 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=TOKI+KSN+Open+Contest+2020+Day+1&iso=20201013T1330&p1=108&ah=15&am=00)
* **Day 2**: [14 October 2020 06:30 - 21:30 UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=TOKI+KSN+Open+Contest+2020+Day+2&iso=20201014T1330&p1=108&ah=15&am=00)

- Each contestant can select **any 5-hour window** within the time range to do the contest for each competition day.
- All three contests are now available on [TLX](https://tlx.toki.id/contests). Please register in those contests.
- Each contestant may start the contest any time within the time range, by clicking the "start" button.
- There will be no additional time given if a contestant starts the contest in less than 5 hours before the contest ends.
- The open contest does not support clarifications, but all important announcements from the original contest will be broadcast as well.

<br>

### Problems Types

- There are 3 possible problem types. Some problem type might not be tested.

- **Batch** problems:
  * The most common problem type.
  * Given an input, contestants write a program that reads input from **stdin** and writes output to **stdout**.
  * The program must run within the given time and memory limits.
  * Example: [Online Ojek, OSN 2018](https://tlx.toki.id/problems/osn-2018-1/C)

- **Interactive** problems:
  * Contestants write a program that interacts with judge's program: judge's program writes to **stdout** and is given as the **stdin** for contestant's program, then contestant's program writes to **stdout** and is given as the **stdin** for judge's program, and the interaction continues until a given goal is reached.
  * Contestant's program must output the answer within the given time and memory limits.
  * Example: [Detecting Gold, OSN 2019](https://tlx.toki.id/problems/osn-2019-2/B)

- **Output-only** problems:
  * Contestants will be given all the input test cases.
  * Contestants submit **output** for each input test case.
  * Contestants **do not have to** write a program; the outputs may be solved manually.
  * Example: [OSN Excursion, OSN 2019](https://tlx.toki.id/problems/osn-2019-1/C).

<br>

### Problem Scoring

* There are two types of scoring: **standard** and **creative**.
* Creative problems will be stated explicitly in the problem description.

* **Standard** scoring:
  * For batch and interactive problems:
    * A problem consists of **multiple subtasks** with various points.
    * A subtask consists of **multiple test cases** that are grouped into some **test groups**.
    * A submission gets a subtask's points if it solves **all of its test groups**.
    * To solve a test group, a submission has to solve **all of its test cases**.
    * A problem may have **open subtasks** where the test cases are given to contestants.
  * For output-only problems:
    * A problem consists of **multiple test cases** with various points.
    * A submission gets the test case's points if it produces the correct output.

* **Creative** scoring:
  * The scoring formula will vary for each problem and will be explicitly stated in the problem description.
  * Example:
    * Batch: [Membaca, OSN 2012](https://tlx.toki.id/problems/osn-2012-2/D).
    * Interactive: [Cat Rumah, OSN 2014](https://tlx.toki.id/problems/osn-2014-1/B).
    * Output-only: [Tourism in Palembang, OSN 2016](https://tlx.toki.id/problems/osn-2016-2/C).

<br>

### Contestant Scoring

* For batch and interactive problems:
  * On creative scoring, for each submission, the score of a subtask is the minimum score among all its test cases.
  * A subtask final score is the **maximum of its score** among all submissions.
  * Contestant's score for a problem is the sum of all its subtasks final score.

  For example, if the first submission got 30 points for the first subtask and 0 points for the second subtask, and the second submission got 0 points for the first subtask and 40 points for the second subtask, then the contestant's score for the problem is 70 points.
* For output-only problems:
  * A test case final score is the **maximum of its score** among all submissions.
  * A contestant's score on a problem is the sum of all its test cases final score.
* A contestant's total score is the sum of **all of problems score** on **both competition days**.
* Contestants will be ranked by the total score (descending).
* Two contestants with **the same** total score will achieve **the same** rank.
* Submission time **will not affect** contestant rank at all.

<br>

### Grading System

* [TLX](https://tlx.toki.id) will be used as the grading system.
* Source code limit for each submission is **300 KB**.
* For each test case, the grader will output one of:
  * **AC** (Accepted): program solved the problem within the given time and memory limits.
  * **WA** (Wrong Answer): program stopped within given time and memory limits, but produced the wrong output.
  * **RTE** (Runtime Error): program crashed or exceedeed the memory limit.
  * **TLE** (Time Limit Exceeded): program exceeded the time limit.
  * Skipped: test case is not graded because there was a test case in the same subtask that was not solved.
