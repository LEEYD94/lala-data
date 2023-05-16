function API_url(url){
    const accessKey = '645e5f4109c3f0f3c309';
    const accessSecret = 'b9c090a8cd363864080d41b9986fe869';

    $.getJSON(url, { 'k-access-key': accessKey, 'k-access-secret': accessSecret })
    .done(function(response) { $('#response').text(JSON.stringify(response)); })
    .fail(function(jqxhr, textStatus, error) { console.error('Error:', textStatus, error); });
}