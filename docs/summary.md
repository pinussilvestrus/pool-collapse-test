# Usability Tests - Notes

Link: [Recordings](https://docs.google.com/document/d/1Kw61f8AYwbd92-UzIFKg0D1hzZ-yiZp3sFlSw_4H7_M/edit)
### Test 1 - Consultant (2nd December)

* knows about elements will deleted afterwards --> wanted to save the process contents in another diagram
* was on to re-model the message flows because he knows they will be gone
* wishes a way to persist the process content (cf. [#509 (comment)](https://github.com/camunda/camunda-modeler/issues/509#issuecomment-349950871))
* would prefer to save in diagram (e.g. via extension element), and not in a seperate file
* back to variant A: it's very misleading that it's preventing him to proceed
* switch to B1: likes it much more, less clicks !
* would have expect a reformat of the message flows ([#1651](https://github.com/camunda/camunda-modeler/issues/1651))
* he was confused by the term "Black Box"
* he understands it after some explanation from the BPMN 2.0 specification
* he really appreciated the "removes content" hint !
* maybe "contend deleted"
* B2: prefers "Empty Pool" over "Black Box Pool"
* Would stay with "Collapsed Pool" because he was getting used to it
* Empty Pool would be okay, but they would have to change training material
* If pool has no content, the "removes content" hint is not needed
* Basically this would be an improvement, but still prefers are more advanced feature in saving the contents

### Test 2 - Consultant (3rd December)

* as Camunda user knows where to look for action (replace menu)
* starts with variant A
* knows about behavior to remove elements after collapsing
* "it's greyed out"
* sees and understands the hint
* conflict in the label (state "collapsed" vs. action "removes content")
* likes the tooltip, but would have directly in label
* wouldn't delete the content manually
* would create a new pool and collapse this one, delete the old one beforehand
* collapsed pools are only for documentation
* goes to variant B1
* likes it better
* replace menu is always for constructive actions, not to permit something
* understands from the label what will happen
* way more intuitive
* understands "Black Box", maybe "private"
* "collapsed" is part of the training material, maybe more understandable for business users
* "removes content" is a good idea, maybe not enough
* maybe "irreversible" is even more declarative
* moves to variant B2
* "empty" is rather a pool with an empty process, not the collapsed version
* would be very cool to keep the message flows
* "removes content" is not saying that the message flows got lost
* would always opt-in for modeling forward, instead of disabling actions
* saving the process state could be very relevant in business use cases, to partly "hide" process logic

### Test 3 - DevRel (3rd December)

* Starts with A
* Likes the hint why it's disabled
* "Removes content" is interesting
* Removes content manually
* Still says "removes content", despite there is no content, he wouldn't expect this
* When collapsing, he expected the message flows to stay, the hint doesn't say this
* Understands the reason why to disable it (dangerous action)
* Would prefer not disabling it and go forward with giving the hint
* There are two cases where I want to collapse a pool
  * Never want to see the contents ever again
  * Hide contents temporarily, to reduce complexity for a while
    * in this case, disabling makes more sense, because "we don't have the feature they want"
    * this case happens way less
* Would prefer a button "Removes Content of Pool"
* If disabled, better would be "remove content first"
* Big UX problem with this --> user does not understand how to enable this action
* Goes to B1
* That's a very nice idea
* Still expected to keep the message flows
* Better approach
* "Black Box" is used in trainings
* Information "removes content" is the best improvement
* Prefers "Black Box" over "Collapsed", it's clearer
* With "collapsed", user know the behavior from sub processes and would expect the same, which we can't offer
* Collapsed is part of the training materials
* Moves to B2
* Likes "Empty Pool" even better
* Maybe "Empty Black Box Pool"? Could be too long
* "Empty" describes the behavior the best
* Collapsed pool is not part of the BPMN standard
* Saving the process content could be difficult, but people might still expect it
* Could be a thing for Cawemo
* No real use case for temporarily hiding stuff for Developers, more for business users