12/7/22

Sorting by tone, then lightness, etc. visually appears to work fairly well, however I sense that there are performance bottlenecks in this process.

I think there should be one pipeline on compilation that may
    -map over colors once performing all of the sorting into 
     buckets in one block or module then returning the model

        -check the hue against primary hue range indexes
            given hue|saturation|lightness
        
        -while a bucket has its own method for identifying
            tones within its own range on request or compilation.
    
I also believe that my main problem in this stage is that I don't have a clearly defined schema to start from. Only a sense that colors should be grouped by hue so that a page or tab may be filtered, searched, sorted or retreived on input.

        -Get Colors of [Collection , Design System ,Database]
            
            -Then display in a scrollable view
              
              With a checkbox or menu pane that allows filtering by [tone, hue, shade] 
                 and a searchbar to get by name or check
                 against current records
            
              ex) show/hide [red,blue,brown,olive,etc]
                    of those primaries
                  show/hide/sort by 
                        [pastel,muted,earth,etc]
                   
In writing through the problem I sense the main issue is 
    
    1 an overwhelming number of parameters to consider
    2 lack of decisiveness on which functions should be   
      implemented eagerly vs lazily
    3 which functions of the application are necessary for
      the project to be considered ready for use

So....

    1: Parameters to consider
    --------------------------
    
    Buckets.
        Index on Primary Colors
            Red
                Orange
                Brown
            Yellow
                Gold
                Olive
            Green
                Lime
                Seaweed
            Blue
                turqoise
                violet
            Purple
                Magenta
                Pink
            Grey
                charcoal
                silver
            White
                very light pastels
                greyish whites

    Considering that each primary color has atleast 2 common colors within its spectrum rather than sorting them into their own index they should be labled as such

        Meaning that on compilation if a hue of red or yellow may also be considered brown or orange
        it should still be in its bucket, while being labeled as such in the same way a component may be labeled as pastel or neon

    I also think that because the main ways to look up a color will be [name,hex,hue,tone] they should all be stored as keys if possible or maybe a  separate index 
    ['name','hex','hue','tone']

        check hex/name
        get named
        get hue(s)
        get tone(s)
        get hue(s) tone(a-z)

    --COST VS PERF--
    ?? cost of creating 5+ indexes for thousands of colors 
    ?? cost of querying one large index multiple times lazily
    

    --BOTTOM LINE------
    
    When retreiving the collections I will first implement a heavily indexed version to simulate a db connection

    Then create a handful of functions to lazily get the same data on DOM inputs


        [[--indexes--]]
        -----------------------------------------------------
            Simulate a build once process like perl/bash
            use specific dom nodes for specific indexes

        (EXTERNAL/USER INTERFACE USE CASES)
        index1 ['hex'] => {
                search element with #as firstValue
                input element labeled hex
        index2 ['name'] => {
                search inputs
        }

        (INTERNAL/DATABASE || FUNCTIONAL USE CASES)
        index3 ['Primary Color Group'] {
                checkbox type filters
                sorting functions
        }

        index4 ['tones']{
                filter functions
                sorting functions
        }

        index5 ['tone primaryColorGroup']{
                filter functions
                sorting functions
        }

        index6 ['collection origin']
    ---------------------------------------------------------


    [--values/conditions--]
    ---------------------------------------------------------
    [index] => [[deep copy]]
        [index] {
            primary: 'red'
            derivative: 'orange'
            tone: 'pastel'
            name: 'title'
            shade: 'black'
            from: 'collection'

            rgb: 'rgb(45,45,45)'
            hsl: 'hsl(15,100,50)'
            hex: '#ff0000'

            hue: 15
            saturation: 100
            lightness: 50
            value: [h,s,l]
            -------------------------
            PROTOTYPE
            -------------------------
            get_rgb()
            get_hsl()
            get_hex()
            get_value()
        }
    ---------------------------------------------------------



    [--implementation--]
    ---------------------------------------------------------
    from db => 
        ['name','hex']
            => getColor() => [primary,tone,shade]
            => toBucket() => [
                                primary(s),
                                shade(greyscale),  
                                tone, 
                             ]
        buckets {
                    <!-- primaries and derivatives -->
            red
            orange
            brown
            yellow
            olive
            yellow green
            green
            blue
            purple
                            <!-- shades -->
            grey
            black
            white
                            <!-- tones -->
            pastel
            muted
            earth
            jewel
            vivid
            luminous
            neon
            
        }

        collections {

        }
        -----------------------------------------------------
        [[--in practice--]]
        
        cherry pick colors as you browse the collection     
        create collections and build design systems
        visually compare and contrast colors on the fly
        add more unique colors as you browse the web
        define colors and variations outside of the default selection

            onclick color options
                add to palette
                create/customize a preset
                edit name
                edit tone/shade/derivate
        
            palette interface tabs
                all colors
                defined groups 
                    [color name || color use] + [variants]

            preset builder
                pick color or group
                add a utility name





        create palette
            [add to palette button] <==> [view palette panel]
            
            [create theme] <==> [view theme panel]
            [use theme]
            [use default theme] => [
                    slate,
                    grey,
                    zinc,
                    neutral,
                    stone,
                    red,
                    orange,
                    amber,
                    yellow,
                    lime,
                    green,
                    emerald,
                    teal,
                    cyan,
                    sky,
                    blue,
                    indigo,
                    violet,
                    purple,
                    fuschia,
                    pink,
                    rose,
                ]