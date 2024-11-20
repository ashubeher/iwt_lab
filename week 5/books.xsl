<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" />
  
  <xsl:template match="/">
    <html>
      <head>
        <title>Book List</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          
          th {
            background-color: rgb(54, 50, 50);
            color: white;
          }
          
          td.author {
            color: blue;
            text-transform: uppercase;
            font-weight: bold;
          }
          
        </style>
      </head>
      <body>
        <h1>Book List</h1>
        <table border="1">
          <thead style="background-color:grey;">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publisher</th>
              <th>Edition</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="Books/book">
              <tr>
                <td><xsl:value-of select="title" /></td>
                <td class="author"><xsl:value-of select="author" /></td>
                <td><xsl:value-of select="isbn" /></td>
                <td><xsl:value-of select="publisher" /></td>
                <td><xsl:value-of select="edition" /></td>
                <td><xsl:value-of select="price" /></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet>