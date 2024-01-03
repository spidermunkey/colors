version 1 :

    created a simple user-interface that allows a visualy representation of several colors in a cleanly formatted array.

        1)
            if a color is clicked, show the color and its hex in a separate component along side the main collection of colors.

        a) dashboard.addEvent('click', () => 
            closest() => colorcompent => data-selector)

version 2 :

    compile an array or collection of arrays with the most know/used colors importing said array into the user-interface.
    
    a) array.forEach(index => {
        add props
        map.set([index])
        make element
    })

version 3 : 

    organize the colors into sections and pages allowing for sorting by 
        
        pre) define ranges
        
        1) source/category
            a) hue
            b) lightness
            c) hue + lightness

        2) use reduce to copy colors into buckets of
                hue
                tone
                shade
            while still keeping a single reference to its collection and element
        
        3) then sort from lightest to darkest

        a) schema = {
            
            allColors,

            collections: {
                Collection = Map: {
                    'title',
                    elementsByHue,
                }
            }
        }

        b) API = {
            this.compiledCollection

            getCollection() {

            }
            renderCollection() {

            }
        }

version 4 : 

    enable (re)organizing of colors via a method that allows a user to add/modify any selected color into a separate folder/palette, making a clear distinction from the colors stored globally and colors preferred by a user.

    pre) build initial tabs and panels for global and private collections of colors
         render content into sections by hue --> by sorting order
         build checkboxes for filtering results by (tone)
    pre) rebuild the side-panel view to show shades and more info for organizing
         and rendering specific color values pasted into the panel

    1) create panel widget that displays a smaller view of colors in a collection
    2) create tabs in the panel for choosing and creating buckets
    3) build form for [name,copy,import,export] [to/from] collection
    4) build searchbar for checking against current colors
    5) build a tab for creating a theme eg: cyan-800 or neutral 500;
        5a) on selecting a color show 8 suggested variants and allow the user to edit
        5b) create a tab for pre-baked themes and allow users to start from there
        5c) allow assigning colors to use cases(classes) like text[sm,link,blue,etc.]
             ex:   [use-utility] ==>   [bg-panel]   ||   [text-link]

    a) schema = {
        
        allColors,

        collections: {
            Collection {
                'title',
                elementsByPrimaryColor_and_Shade,
            }
        }

        palettes: {
            myFavorite: [],
            [createdOnInput]: [],
        }

        themes: {
            myFirstTheme: {
                clr1: {
                    clrName:
                    variants: 'for contrasting use cases e.g. (cyan-900);
                }
            }
        }
    }
        --------------------------------------------------------------------------------
        [seeMore]{{
            Color & Model are representations of a global database immutable by the user, allowing features like restore, undo, and explore. New colors may be added through backdoors(server sockets) and be represented in various ways as new features are added and implimented.
                --whereas--
            usrData & usrColor are deep copies of the original that may be moved,
            removed, added, modified, and tracked in a way that is distinct for every user. For example I may be able to save a color as "My Favorite", or "Design Project 1" change the name, hue, lightness, etc. Then save that as a text color preset, and still have a way to undo changes or refer back to, and use the original or copy else where. 
                --in this way--
            The transfer, manipulation, and searching of data can be managed in a more organized way giving the user a single a single connection to colors shared by all, an api for managing that data, and a private database that may be cached and stored locally that is specific to user preferences, or even saving the data in session storage as string representation of changes made then using those strings as 'instructions' to the backend of how to modify and deliver the data across subsequent sessions.
                --by doing so--
            I believe that features like search(in), remove(from), add(to), and save(as) will perform better and allow an easy implimentation of new features and updates, in contrast to constantly reducing, filtering, sorting, and compiling massive arrays of colors.
        }}
        --------------------------------------------------------------------------------

version 5 : 
    create an algorithm that on compilation sorts colors into common groups

        1) warm/cool
        2) frequently used
        3) dark/light

        API = class {
            compiledColors

            method1(){

            }
            method2(){

            }
        }

version update :

    1) create a script modeling the schema defined with javascript using bash
    2) store the model in indexedDB