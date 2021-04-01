(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(8),r=(n(0),n(324)),o={id:"import-data",title:"Import data",sidebar_label:"Import data"},l={unversionedId:"database-functionalities/import-data",id:"version-1.3.0/database-functionalities/import-data",isDocsHomePage:!1,title:"Import data",description:"Memgraph comes with tools for importing data into the database. Data can be",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/import-data.md",slug:"/database-functionalities/import-data",permalink:"/memgraph/1.3.0/database-functionalities/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/import-data.md",version:"1.3.0",sidebar_label:"Import data",sidebar:"version-1.3.0/memgraph",previous:{title:"Database functionalities overview",permalink:"/memgraph/1.3.0/database-functionalities"},next:{title:"Inspecting queries",permalink:"/memgraph/1.3.0/database-functionalities/inspecting-queries"}},s=[{value:"CSV Import Tool",id:"csv-import-tool",children:[]},{value:"Importing Cypher Queries",id:"importing-cypher-queries",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Memgraph comes with tools for importing data into the database. Data can be\nimported either using the ",Object(r.b)("a",{parentName:"p",href:"#csv-import-tool"},"CSV import tool")," or using saved\n",Object(r.b)("a",{parentName:"p",href:"#importing-cypher-queries"},"cypher queries")," with ",Object(r.b)("inlineCode",{parentName:"p"},"mg_client")," running in non-interactive\nmode."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"NOTE:")," ",Object(r.b)("inlineCode",{parentName:"p"},"mg_client")," is deprecated tool still coming within Memgraph package.\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",Object(r.b)("inlineCode",{parentName:"p"},"mg_client")," in\nthe future. If possible, please use ",Object(r.b)("inlineCode",{parentName:"p"},"mgconsole")," instead."))),Object(r.b)("h3",{id:"csv-import-tool"},"CSV Import Tool"),Object(r.b)("p",null,"CSV is a universal and very versatile data format used to store large\nquantities of data.  Each Memgraph database instance has a CSV import tool\ninstalled called ",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for\ninitial bulk ingestion of data into the database.  Upon ingestion, the CSV\nimporter creates a snapshot that will be used by the database to recover its\nstate on its next startup."),Object(r.b)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",Object(r.b)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),".  If\nyou already have a pipeline set-up for Neo4j, you should only replace\n",Object(r.b)("inlineCode",{parentName:"p"},"neo4j-admin import")," with ",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),Object(r.b)("h4",{id:"csv-file-format"},"CSV File Format"),Object(r.b)("p",null,"Each row of a CSV file represents a single entry that should be imported into\nthe database.  Both nodes and relationships can be imported into the database\nusing CSV files."),Object(r.b)("p",null,"Each set of CSV files must have a header that describes the data that is stored\nin the CSV files.  Each field in the CSV header is in the format\n",Object(r.b)("inlineCode",{parentName:"p"},"<name>[:<type>]")," which identifies the name that should be used for that column\nand the type that should be used for that column.  The type is optional and\ndefaults to ",Object(r.b)("inlineCode",{parentName:"p"},"string")," (see the following chapter)."),Object(r.b)("p",null,"Each CSV field must be divided using the delimiter (",Object(r.b)("inlineCode",{parentName:"p"},"--delimiter")," flag) and\neach CSV field can either be quoted or unquoted.  When the field is quoted, the\nfirst and last character in the field ",Object(r.b)("em",{parentName:"p"},"must")," be the quote character (",Object(r.b)("inlineCode",{parentName:"p"},"--quote"),"\nflag).  If the field isn't quoted, and a quote character appears in it, it is\ntreated as a regular character.  If a quote character appears inside a quoted\nstring then the quote character must be doubled in order to escape it.  Line\nfeeds and carriage returns are ignored in the CSV file, also, the file can't\ncontain a NULL character."),Object(r.b)("p",null,"The CSV parser uses the same logic as the standard Python CSV parser.  The data\nis parsed in the same way as the following snippet:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, strict=True):\n    # process 'row'\n")),Object(r.b)("p",null,"Python uses 'excel' as the default dialect when parsing CSV files and the\ndefault settings for the CSV parser are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"delimiter: ",Object(r.b)("inlineCode",{parentName:"li"},"','")),Object(r.b)("li",{parentName:"ul"},"doublequote: ",Object(r.b)("inlineCode",{parentName:"li"},"True")),Object(r.b)("li",{parentName:"ul"},"escapechar: ",Object(r.b)("inlineCode",{parentName:"li"},"None")),Object(r.b)("li",{parentName:"ul"},"lineterminator: ",Object(r.b)("inlineCode",{parentName:"li"},"'\\r\\n'")),Object(r.b)("li",{parentName:"ul"},"quotechar: ",Object(r.b)("inlineCode",{parentName:"li"},"'\"'")),Object(r.b)("li",{parentName:"ul"},"skipinitialspace: ",Object(r.b)("inlineCode",{parentName:"li"},"False"))),Object(r.b)("p",null,"The above snippet can be expanded to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, delimiter=',', doublequote=True,\n                      escapechar=None, lineterminator='\\r\\n',\n                      quotechar='\"', skipinitialspace=False,\n                      strict=True):\n    # process 'row'\n")),Object(r.b)("p",null,"For more information about the meaning of the above values, see:\n",Object(r.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/csv.html#csv.Dialect"},"https://docs.python.org/3/library/csv.html#csv.Dialect")),Object(r.b)("h5",{id:"properties"},"Properties"),Object(r.b)("p",null,"Both nodes and relationships can have properties added to them.  When importing\nproperties, the CSV importer uses the name specified in the header of the\ncorresponding CSV column for the name of the property.  A property is\ndesignated by specifying one of the following types in the header:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"integer"),", ",Object(r.b)("inlineCode",{parentName:"li"},"int"),", ",Object(r.b)("inlineCode",{parentName:"li"},"long"),", ",Object(r.b)("inlineCode",{parentName:"li"},"byte"),", ",Object(r.b)("inlineCode",{parentName:"li"},"short"),": creates an integer property"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float"),", ",Object(r.b)("inlineCode",{parentName:"li"},"double"),": creates a float property"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bool"),": creates a boolean property"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"string"),", ",Object(r.b)("inlineCode",{parentName:"li"},"char"),": creates a string property")),Object(r.b)("p",null,"When importing a boolean value, the CSV field should contain exactly the text\n",Object(r.b)("inlineCode",{parentName:"p"},"true")," to import a ",Object(r.b)("inlineCode",{parentName:"p"},"True")," boolean value.  All other text values are treated as\na boolean value ",Object(r.b)("inlineCode",{parentName:"p"},"False"),"."),Object(r.b)("p",null,"If you want to import an array of values, you can do so by appending ",Object(r.b)("inlineCode",{parentName:"p"},"[]")," to\nany of the above types.  The values of the array are then determined by\nsplitting the raw CSV value using the array delimiter (",Object(r.b)("inlineCode",{parentName:"p"},"--array-delimiter"),"\nflag) character."),Object(r.b)("p",null,"Assuming that the array delimiter is ",Object(r.b)("inlineCode",{parentName:"p"},";"),", the following example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"first_name,last_name:string,number:integer,aliases:string[]\nJohn,Doe,1,Johnny;Jo;J-man\nMelissa,Doe,2,Mel\n")),Object(r.b)("p",null,"Will yield these results:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},'CREATE ({first_name: "John", last_name: "Doe", number: 1, aliases: ["Johnny", "Jo", "J-man"]});\nCREATE ({first_name: "Melissa", last_name: "Doe", number: 2, aliases: ["Mel"]});\n')),Object(r.b)("h5",{id:"nodes"},"Nodes"),Object(r.b)("p",null,"When importing nodes, several more types can be specified in the header of the\nCSV file (along with all property types):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ID"),": id of the node that should be used as the node ID when importing relationships"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LABEL"),": designates that the field contains additional labels for the node"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ID")," field type sets the internal ID that will be used for the node when\ncreating relationships.  It is optional and nodes that don't have an ID value\nspecified will be imported, but can't be connected to any relationships.  If\nyou want to save the ID value as a property in the database, just specify a\nname for the ID (",Object(r.b)("inlineCode",{parentName:"p"},"user_id:ID"),").  If you just want to use the ID during the\nimport, leave out the name of the field (",Object(r.b)("inlineCode",{parentName:"p"},":ID"),").  The ",Object(r.b)("inlineCode",{parentName:"p"},"ID")," field also supports\ncreating separate ID spaces.  The ID space is specified with the ID space name\nappended to the ",Object(r.b)("inlineCode",{parentName:"p"},"ID")," type in parentheses (",Object(r.b)("inlineCode",{parentName:"p"},"ID(user)"),").  That allows you to have\nthe same IDs (by value) for multiple different node files (for example, numbers\nfrom 1 to N).  The IDs in each ID space will be treated as an independent set\nof IDs that don't interfere with IDs in another ID space."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"LABEL")," field type adds additional labels to the node.  The value is\ntreated as an array type so that multiple additional labels can be specified\nfor each node.  The value is split using the array delimiter\n(",Object(r.b)("inlineCode",{parentName:"p"},"--array-delimiter")," flag)."),Object(r.b)("h5",{id:"relationships"},"Relationships"),Object(r.b)("p",null,"In order to be able to import relationships, you must import the nodes in the\nsame invocation of ",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv")," that is used to import the relationships."),Object(r.b)("p",null,"When importing relationships, several more types can be specified in the header\nof the CSV file (along with all property types):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"START_ID"),": id of the start node that should be connected with the relationship"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"END_ID"),": id of the end node that should be connected with the relationship"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TYPE"),": designates the type of the relationship"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"START_ID")," field type sets the start node that should be connected with the\nrelationship to the end node.  The field ",Object(r.b)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",Object(r.b)("inlineCode",{parentName:"p"},"START_ID(user)"),")."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"END_ID")," field type sets the end node that should be connected with the\nrelationship to the start node.  The field ",Object(r.b)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",Object(r.b)("inlineCode",{parentName:"p"},"END_ID(user)"),")."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TYPE")," field type sets the type of the relationship.  Each relationship\n",Object(r.b)("em",{parentName:"p"},"must")," have a relationship type, but it doesn't necessarily need to be\nspecified in the CSV file, it can also be set externally for the whole CSV\nfile.  The name of this field is ignored."),Object(r.b)("h4",{id:"csv-importer-flags"},"CSV Importer Flags"),Object(r.b)("p",null,"The importer has many command line options that allow you to customize the way\nthe importer loads your data."),Object(r.b)("p",null,"The two main flags that are used to specify the input CSV files are ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"--relationships"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," flag is used to specify CSV files that contain the nodes to the\nimporter.  Multiple files can be specified in each supplied ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," flag.\nFiles that are supplied in one ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," flag are treated by the CSV parser as\none big CSV file.  Only the first line of the first file is parsed for the CSV\nheader, all other files (and rows) are treated as data.  This is useful when\nyou have a very large CSV file and don't want to edit its first line just to\nadd a CSV header.  Instead, you can specify the header in a separate file (e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"users_header.csv"),") and have the data intact in the large file (e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"users.csv"),").  Also, you can supply additional labels for each set of node\nfiles.  The format of this flag is:\n",Object(r.b)("inlineCode",{parentName:"p"},"[<label>[:<label>]...=]<file>[,<file>][,<file>]..."),".  Take note that only the\n",Object(r.b)("inlineCode",{parentName:"p"},"<file>")," part is mandatory, all other parts of the flag value are optional.\nMultiple ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," flags can be supplied to describe multiple sets of different\nnode files.  For the importer to work, at least one ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," flag must be\nsupplied."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," flag is used to specify CSV files that contain the\nrelationships to the importer.  Multiple files can be specified in each\nsupplied ",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," flag.  Files that are supplied in one\n",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," flag are treated by the CSV parser as one big CSV file.  Only\nthe first line of the first file is parsed for the CSV header, all other files\n(and rows) are treated as data.  This is useful when you have a very large CSV\nfile and don't want to edit its first line just to add a CSV header.  Instead,\nyou can specify the header in a separate file (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"friendships_header.csv"),")\nand have the data intact in the large file (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"friendships.csv"),").  Also, you\ncan set the type of all relationships in the files for each set of\nrelationships files.  The format of this flag is:\n",Object(r.b)("inlineCode",{parentName:"p"},"[<type>=]<file>[,<file>][,<file>]..."),".  Take note that only the ",Object(r.b)("inlineCode",{parentName:"p"},"<file>")," part\nis mandatory, all other parts of the flag value are optional.  Multiple\n",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," flags can be supplied to describe multiple sets of different\nrelationship files.  The ",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," flag isn't mandatory."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--delimiter")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},","),") sets the delimiter that should be used\nwhen splitting the CSV fields."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--quote")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},'"'),") sets the quote character that should be used\nto quote a CSV field."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--array-delimiter")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},";"),") sets the delimiter that should be\nused when splitting array values."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--id-type")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"STRING"),") specifies which data type should be\nused to store the supplied node IDs when storing them as properties (if the\nfield name is supplied).  The supported values are either ",Object(r.b)("inlineCode",{parentName:"p"},"STRING")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"INTEGER"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--ignore-empty-strings")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") tells the importer to treat\nall empty strings as ",Object(r.b)("inlineCode",{parentName:"p"},"Null")," values instead of an empty string value."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--ignore-extra-columns")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all columns (instead of raising an error) that aren't specified after\nthe last specified column in the CSV header."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--skip-bad-relationships")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all relationships (instead of raising an error) that refer to nodes that\ndon't exist in the node files."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--skip-duplicate-nodes")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all duplicate nodes (instead of raising an error).  Duplicate nodes are\nnodes that have an ID that is the same as another node that was already\nimported."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"--trim-strings")," flag (default ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") tells the importer to trim all of\nthe loaded CSV field values before processing them further.  Trimming the\nfields removes all leading and trailing whitespace from them."),Object(r.b)("h4",{id:"how-to-use-the-csv-import-tool"},"How to Use the CSV Import Tool?"),Object(r.b)("p",null,"The import tool is run from the console, using the ",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv")," command.\nThe tool should be run as user ",Object(r.b)("inlineCode",{parentName:"p"},"memgraph"),", using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv\n")),Object(r.b)("p",null,"If you installed Memgraph using Docker, you will need to run the importer\nusing the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph\n")),Object(r.b)("p",null,"You can pass CSV files containing node data using the ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," option.\nMultiple files can be specified by repeating the ",Object(r.b)("inlineCode",{parentName:"p"},"--nodes")," option.  At least\none node file should be specified. Similarly, graph edges (also known as\nrelationships) are passed via the ",Object(r.b)("inlineCode",{parentName:"p"},"--relationships")," option.  Multiple\nrelationship files are imported by repeating the option. Unlike nodes,\nrelationships are not required."),Object(r.b)("p",null,"Internally, the CSV import tool creates a database snapshot from the CSV files.\nBy default, the tool will search for the installed Memgraph configuration and\nwill store the snapshot inside its configured data directory using the\nconfigured properties on edges setting. If the configuration isn't found, you\nwill need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"--data-directory")," option to specify the data directory\nand ",Object(r.b)("inlineCode",{parentName:"p"},"--storage-properties-on-edges")," to specify whether properties on edges are\nenabled. Naturally, you can use the same options to override the default\nbehavior. Memgraph will recover the imported data on the next startup by\nlooking in the data directory. For more details on Memgraph's durability and\ndata recovery features, please check out the appropriate\n",Object(r.b)("a",{parentName:"p",href:"/memgraph/1.3.0/concepts/storage"},"article"),"."),Object(r.b)("p",null,"It is also important to note that importing CSV data using the ",Object(r.b)("inlineCode",{parentName:"p"},"mg_import_csv"),"\ncommand should be a one-time operation before running Memgraph. In other\nwords, this tool should not be used to import data into an already running\nMemgraph instance."),Object(r.b)("p",null,"For information on other options, run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --help\n")),Object(r.b)("p",null,"When using Docker, this translates to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph --help\n")),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("p",null,"Let's import a simple dataset."),Object(r.b)("p",null,"Store the following in ",Object(r.b)("inlineCode",{parentName:"p"},"comment_nodes.csv"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv"},"id:ID(COMMENT_ID),country:string,browser:string,content:string,:LABEL\n0,Croatia,Chrome,yes,Message;Comment\n1,United Kingdom,Chrome,thanks,Message;Comment\n2,Germany,,LOL,Message;Comment\n3,France,Firefox,I see,Message;Comment\n4,Italy,Internet Explorer,fine,Message;Comment\n")),Object(r.b)("p",null,"Now, let's add ",Object(r.b)("inlineCode",{parentName:"p"},"forum_nodes.csv"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv"},"id:ID(FORUM_ID),title:string,:LABEL\n0,General,Forum\n1,Support,Forum\n2,Music,Forum\n3,Film,Forum\n4,Programming,Forum\n")),Object(r.b)("p",null,"And finally, set relationships between comments and forums in\n",Object(r.b)("inlineCode",{parentName:"p"},"relationships.csv"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csv"},":START_ID(COMMENT_ID),:END_ID(FORUM_ID),:TYPE\n0,0,POSTED_ON\n1,1,POSTED_ON\n2,2,POSTED_ON\n3,3,POSTED_ON\n4,4,POSTED_ON\n")),Object(r.b)("p",null,"Now, you can import the dataset using the CSV importer tool."),Object(r.b)("p",null,"WARNING: Your existing snapshot and WAL data will be considered obsolete, and\nMemgraph will load the new dataset."),Object(r.b)("p",null,"Use the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes comment_nodes.csv --nodes forum_nodes.csv --relationships relationships.csv\n")),Object(r.b)("p",null,"If using Docker, things are a bit more complicated. First you need to copy the\nCSV files where the Docker image can see them:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp comment_nodes.csv mg_import_helper:/import-data\ndocker cp forum_nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),Object(r.b)("p",null,"Then, run the importer with the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/comment_nodes.csv --nodes /import-data/forum_nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),Object(r.b)("p",null,"Next time you run Memgraph, the dataset will be loaded."),Object(r.b)("h3",{id:"importing-cypher-queries"},"Importing Cypher Queries"),Object(r.b)("p",null,"When Memgraph is running, cypher queries are imported by running ",Object(r.b)("inlineCode",{parentName:"p"},"mg_client")," in\nnon-interactive mode. The user can import queries saved in e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"queries.txt"),"\nby issuing the following shell command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --use-ssl=False < queries.txt\n")),Object(r.b)("p",null,"If you installed Memgraph using Docker, you will need to run the client using\nthe following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mg_client memgraph --host HOST --use-ssl=False < queries.txt\n")),Object(r.b)("p",null,"Remember to replace ",Object(r.b)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see\n",Object(r.b)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/installation/docker-installation#note-for-docker-users"},"Note for Docker users"),")."),Object(r.b)("p",null,"For more information about ",Object(r.b)("inlineCode",{parentName:"p"},"mg_client")," options run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --help\n")))}c.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return n?i.a.createElement(h,l(l({ref:t},p),{},{components:n})):i.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);