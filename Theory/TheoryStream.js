const image1 = document.getElementById('Image_ForkingPath');

// Fetch the original image
fetch('../Theory/Images/ForkingPath.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image1.src = url)
.catch(console.error);



 const image2 = document.getElementById('Image_LibraryofBabel');

// Fetch the original image
fetch('../Theory/Images/LibraryofBabel.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image2.src = url)
.catch(console.error);



 const image3 = document.getElementById('Image_DotCom');

// Fetch the original image
fetch('../Theory/Images/StockMarketBubble.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image3.src = url)
.catch(console.error);

 const image4 = document.getElementById('Image_FirstBrowserWar');

// Fetch the original image
fetch('../Theory/Images/chrome-firefox-edge-brave-logos.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image4.src = url)
.catch(console.error);



 const image5 = document.getElementById('Image_SecondBrowserWar');

// Fetch the original image
fetch('../Theory/Images/Browsers2.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image5.src = url)
.catch(console.error);


 const image6 = document.getElementById('Image_Flash');

// Fetch the original image
fetch('../Theory/Images/adobe_flash_player.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image6.src = url)
.catch(console.error);




 const image7 = document.getElementById('Image_Web1');

// Fetch the original image
fetch('../Theory/Images/web1-0-web2-0-web3-0-1.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image7.src = url)
.catch(console.error);




 const image8 = document.getElementById('Image_Web2');

// Fetch the original image
fetch('../Theory/Images/web1-0-web2-0-web3-0-1.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image8.src = url)
.catch(console.error);





 const image9 = document.getElementById('Image_Markup');

// Fetch the original image
fetch('../Theory/Images/semantic-markup.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image9.src = url)
.catch(console.error);




 const image10 = document.getElementById('Image_Hypertext');

// Fetch the original image
fetch('../Theory/Images/hypertext.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image10.src = url)
.catch(console.error);





const image11 = document.getElementById('Image_Teaching');

// Fetch the original image
fetch('../Theory/Images/TeachingOnline.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image11.src = url)
.catch(console.error);




const image12 = document.getElementById('Image_HistoryWeb1');

// Fetch the original image
fetch('../Theory/Images/WWW1.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image12.src = url)
.catch(console.error);




const image13 = document.getElementById('Image_HistoryWeb2');

// Fetch the original image
fetch('../Theory/Images/History-of-the-Web-part2.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image13.src = url)
.catch(console.error);




const image14 = document.getElementById('Image_Ethics');

// Fetch the original image
fetch('../Theory/Images/ethics.png')
// Retrieve its body as ReadableStream
.then(response => response.body)
.then(rs => {
  const reader = rs.getReader();

  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();

        // When no more data needs to be consumed, break the reading
        if (done) {
          break;
        }

        // Enqueue the next data chunk into our target stream
        controller.enqueue(value);
      }

      // Close the stream
      controller.close();
      reader.releaseLock();
    }
  })
})
// Create a new response out of the stream
.then(rs => new Response(rs))
// Create an object URL for the response
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
// Update image
.then(url => image14.src = url)
.catch(console.error);