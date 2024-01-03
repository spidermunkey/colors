[[ 12/8/22 ]]

Now that the data seems to be organized well enough to continue I think the code should be separated into 
API/PROXY/VIEW

--Starting With The Data--
The data should come from the fake_db and be parsed and returned by the api but thats as far as it should go in using the data

--from that point--
Build a proxy that gathers all the data abstracting the nuiances away from the api. 
So that it may be used by the view

--in this way--
I won't need to wonder how the data can be molded to fit with DOM methods... it just works using methods provided by the proxy

--from that point--
construct view, independent of data, so that I can get deeper insights to how I want the proxy/api to behave.

--proceeding to--
build a controller so that the API doesn't need to know where the data is going, only how to structure it. 
then refactor, so that it doesn't need to know what element its bound to, only what function to return when asked.
finally ending up with a view that gets its functions from the controller and only needs to say which elements are responsible for running them.

--so if--
classNames change ? only the view should be updated... 
semantic stucture changes ? only the controller should be updated
data change ? only the api should change

--eventually ending up with--
a clean separation of concerns making the application easy to reason about,
and ultimately a declaritive codebase that is easy to maintain and update over time.

[[ 12/15/22 ]]

I've refactored the mock database so that each palette has its own collection of colors that are organized in a way that makes them easy
to filter and sort.

Now I would like to tab through them at will. I think the best way is to also build HTML components into the classes so that if I call get
HTML_Fragments it will only return a document fragment with each divided into scrollable sections

-- from there I can build a router/proxy that may use these fragments to populate the dom, applying and removing classes to show and hide each
section onclick

[[ 12/17/22 ]]

Starting with basic tab functionality the basic api for dashboard views should handle

    {{ DASHBOARD CONTROLS }}

    -update current tab on input from menu

    -updating the state of the side menu

    -sorting on checkbox input
        [ show only ( hue(s), tone(s) ) ]

    -scrolling to a section

    -copying selected color to clipboard

    -displaying preview to the sidepanel
    

Then I'm thinking I should make a separate api/funcionality for handling the side-panel
    -- so that it may also be used as a widget that may be used in other applications --

    {{ SIDEPANEL CONTROLS }}
 
    -[ copying ] colors from palettes to collections and themes
    -[ copying,deleting,moving ] colors between collections and palettes

    -[exporting] to clipboard
        [pre-baked themes]
        [single colors]
        [multiple colors]
    -[displaying] plain text representations of
        [color name]
        [hex code]
        [known collections/palettes/themes]
    -[editing]
        [name]
        [favorited]
    -[creating]
        [colors]
        [themes]
        [collections]
        [gradients]
    -[deleting]
        [colors]
        [themes]
        [collections]
    -[creating from copy]
        [tones/shades]
    -[showing]
        [current color]
        [current color as a preview]
            --background
            --text
