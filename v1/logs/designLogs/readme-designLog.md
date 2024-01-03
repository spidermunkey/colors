I've defined a main focal point for users -- dashboard view of colors
however designing an interface that guides them to that appropriate endpoint presents a challenge

That said I think I should define what each ui element represents and maybe work through the broader concept

From [HOME]
    -> select a collection | theme | palette to browse
        or
    -> browse all colors

    [Palette] 
    A group of colors from a source provided by the api.
    In a broad sense it represents a large group of colors defined by a single person or entity
        --Crayola
        --Munsell
        --Tailwind
        --Designer
    **currently all palettes are imported via a backdoor api and implicitly regaurded as 
      a large collection of unique colors from a single source

    [Collection]
    A smaller group of hand picked colors chosen from the larger collection for a particular use case or identity
        --Favorites
        --Most Used
        --Warm Colors
        --Project Brand Colors
    **colors can be imported via prompted form by one or many, but the process will most likely be made limited so 
      as to further guide the user into creating meaningful collections, rather than unconsciously dumping large swathes
      into a collection

    [Themes]
    An even more refined group of colors aimed around organizing for utility rather than browsing and comparing.
        --Website Dark Theme
        --Website Name
        --Default Theme
    Even further, a user may define utility names that will eventually become css classes and associate a color and
    it's variations with a particular use case such as:
            --text-small
            --text-blue
            --link-visited
            --link-passive
            --banner1
            --popup2
    **for future reference it is intended for this feature to be updated alongside a component library where many basic
      components can be organized together and previewed with selected colors for deeper insights and side by side comparison.


[[12/26/22]]

In reading "Refactoring UI" I noticed a few things that I did right and wrong on the first couple iterations and with most of the other things I built

--[things i did wrong]--
  +exerpt 
    ++ In the earliest stages of designing a new feature, don’t get hung up making low-level decisions about things like typefaces, shadows, icons, etc.

    ++ resist the temptation to introduce color right away.

    ++ Don’t imply functionality in your designs that you aren’t ready to build

--[things i kinda did right]--
   ++ start with a piece of actual functionality/feature
      + Once you’re happy with the basic design, make it real.
      + Iterate on the working design until there are no more problems left to solve, then jump back into design mode and start working on the next feature

--[things i didn't know was a thing]--

  ++ Choose a personality
    +  A banking site might ["try to communicate"] secure and professional, while a trendy new startup might have a design that feels fun and playful

--[things to remember]--

  Font = Feel
    Serif ==> Classic/Elegant
    Sans ==> Plain/Neutral
    Sans Serif Rounded ==> Playful/Fun
  

  Color = Mood
    Blue ==> Safe/Familiar
    Gold ==> Expensive/Sophisticated
    Pink ==> Fun/Goofy/Inviting


  Words Matter
     less personal ==> more professional
     friendlier ==> heartfelt


  Borders Matter
    ++  if/how much you round the corners in your design can have a big impact on the overal feel.
    ++  Whatever you choose, it’s important to stay consistent.
    
    no radius ==> serious/formal
    small radius ==> neutral
    large radius ==> playful/inviting


  Hierarchy is Everything!
    ++ Visual hierarchy refers to how important the elements in interface appear in relation to one another, and it’s the most effective tool you have for making something feel “designed”

    emphasis on de-emphasis
    label when utterly necessary
    balance weight with contrast

    visual heirarchy >> semantics
      primary action = obvious => solid, high contrast
      secondary action = clear not prominent => outlines, low contrast
      tertiary action = discoverable but unobtrusive => hyperlink esque
      (if) destructive action != primary action... action != primary action

    Avoid ambiguous spacing
    + for spacing start with more than necessary then remove as needed
    + and dont fill the entire screen if you don't need to
    + if its responsive try to start at 400px first... thinking in columns
    + Whenever you’re relying on spacing to connect a group of elements, always make sure there’s more space around the group than there is within it 

  Emphasize by de-emphasizing
    + give active item a different color, and the inactive a softer color
    + if sidebar area seems to be competing with main area remove the background color

    Labels are a last resort
      as supporting content when possible
    Emphasize with information dense pages eg: tech specs

      Cleanly Expresses Data + Context >> Formatted Labels
      12 left in stock >> In stock: 12
      3 Bedrooms >> Bedrooms: 3


  Separate visual hierarchy from document hierarchy
    Supporting Content Shouldn't steal the show

  Balance Weight and Contrast for visual relationships
    + Just like bold text, icons (especially solid ones) are generally pretty “heavy”
    + there’s no way to change the “weight” of an icon there’s no way to change the “weight” of an icon  lower the contrast of the icon by so to create balance giving it a softer color.


  
  Keep paragraphs between 45/75 characters => 20-35em
  Left align Text -- Right align nmbers in tables
  Vertical align baseline
  Smaller letters & longer lines => more line height
  Bigger letters & smaller lines => less line height
  (If) Justified Text => hyphenate