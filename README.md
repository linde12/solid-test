Playing around with Solid. Kind of like a baby between the svelte compiler & React runtime API. So far love it, performant, tiny, no vdom, no dirty checking. Compiled down to pure imperative JS.

Of course ecosystem isn't large (yet?), but works well with e.g. tailwindcss. Supposed to work with styled as well but haven't given it a go.

Name is a bit confusing, searching for solid js will just show you articles about the SOLID principles... I am willing to bet that this is a major reason why it hasn't gained more traction yet.

Testing seems a bit underdeveloped. Not sure how i would go about it since there is no vdom. I'm guessing you have to grab for internals since that's all (well not all) it is after compile anyways with `document.querySelector` but that isn't very nice IMO. No examples on testing, just contrived examples (e.g. rendering App component) so thats a warning sign to me
