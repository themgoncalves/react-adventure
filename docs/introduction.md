
### Motivation

We all have or will work with outdated/monolith project, hard to code, maintain and to implement new stacks of technology.

Usually in those projects, we face **huge JavaScripts files**, sometimes with **over than 1MB**! This is a **huge issue**, especially for mobile uses.

According to [Sam Saccone from Google](https://www.youtube.com/watch?v=RWLzUnESylc), this file would take to be read by the browser on Samsung Galaxy S7 ~850 ms and Nexus 5 in **~1700 ms**!

Besides that, we would have *scalability penalty* for such environment, costing more server power ~~and money!~~ to deliver the same expected behavior.

In other words, this would be an unsustainable environment we would be facing, with our resources being drained each time more, and by resources, I mean both **financial** and **human**.

Because of such actual possibility, we build **React Adventure**.

> _The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy._
> ###### _Martin Luther King Jr._

<br />

### Goal

As Engineers, we're constantly looking for new ways to *improve* and *add new features* to our code **without have to refactor** it.

By this reason, we came up with this approach, which give us the ability to:

Paraphrasing Steve Krug:
> _"Making every component, function or screen self-evident is like having good lighting in a store: **it just makes everything seem better**."_

So we defined as a goal:

* Make every `component, function or screen self-evident`.
* To create a `readable` code.
* To `safely delete` legacy/unused code without effort or break the application.
* To `easily create or update` different part of the application, in the shortest possible time.
* Be able to `implement new techs with minimum refactory effort`.
